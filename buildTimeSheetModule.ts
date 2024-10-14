import { build } from 'vite'
import { exec } from 'node:child_process'
import { compile } from 'sass'
import * as fs from 'node:fs'
import * as path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

const endDir: string = './env'
const envPrefix: string = 'APP'

function clearDistFolder() {
    fs.rmdirSync('./dist', {
        recursive: true
    })
}

async function buildTimeSheetModule() {
    await build({
        root: path.resolve(__dirname, './src'),
        base: '/foo/',
        build: {
            outDir: '../dist',
            lib: {
                entry: path.resolve(__dirname, 'src/components/index.ts'),
                name: 'AprTimeSheet',
                fileName: (format) => `time-sheet.${format}.js`
            },
            reportCompressedSize: true,
            rollupOptions: {}
        },
        plugins: [
            vue({
                reactivityTransform: true
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', 'file://', +__dirname)),
                '~': fileURLToPath(new URL('.', 'file://', +__dirname))
            }
        },
        envDir,
        envPrefix
    })
}

function buildTypesDeclaration() {
    exec('vue-tsc -p tsconfig.build-lib.json --declaration --emitDeclarationOnly')
}

function processStyles() {
    fs.copyFileSync('./src/styles/_main.scss', './dist/time-sheet-module-styles.scss')
    const compileResult = compile('./dist/time-sheet-module-styles.scss', { sourceMap: false })
    fs.writeFileSync('./dist/time-sheet-module-styles.scss', compileResult.css)
}

async function main() {
    clearDistFolder()
    buildTypesDeclaration()
    await buildTimeSheetModule()
    processStyles()
}

main()
