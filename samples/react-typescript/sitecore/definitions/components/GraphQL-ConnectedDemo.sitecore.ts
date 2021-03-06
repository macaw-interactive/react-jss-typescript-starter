import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the GraphQL-ConnectedDemo component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when `jss manifest` is run.
 */
export default function(manifest: Manifest): void {
  manifest.addComponent({
    name: 'GraphQL-ConnectedDemo',
    icon: SitecoreIcon.GraphConnection_directed,
    fields: [
      { name: 'sample1', type: CommonFieldTypes.SingleLineText },
      { name: 'sample2', type: CommonFieldTypes.GeneralLink },
    ],
  });
}
