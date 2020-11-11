module.exports = {
  resources: [ 
    { from: 'src/client/resources', to: 'dist/resources/' },
    { from: 'node_modules/@salesforce-ux/design-system/assets', to: 'dist/resources/slds' } 
],
  sourceDir: './src/client',
  devServer: { proxy: { '/': 'http://localhost:3002' } }
}