import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<{
        min: 1;
        max: 50;
      }>;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAboutUsAboutUs extends Schema.SingleType {
  collectionName: 'about_uses';
  info: {
    singularName: 'about-us';
    pluralName: 'about-uses';
    displayName: '3. About Us';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Paragraphs: Attribute.DynamicZone<
      ['shared.desc-with-pic', 'about-us.members']
    >;
    Title: Attribute.String & Attribute.Required;
    SEO: Attribute.Component<'shared.seo'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::about-us.about-us',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreativeProjectCreativeProject extends Schema.SingleType {
  collectionName: 'creative_projects';
  info: {
    singularName: 'creative-project';
    pluralName: 'creative-projects';
    displayName: '6. Creative Project';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SEO: Attribute.Component<'shared.seo'>;
    CallToAction: Attribute.Component<'shared.call-to-action'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.pic-with-title', 'shared.desc-with-pic']
    >;
    Carousel: Attribute.Component<'shared.carousel-images', true>;
    AlertBar: Attribute.Component<'shared.test'>;
    GalleryTitle: Attribute.String & Attribute.Required;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::creative-project.creative-project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::creative-project.creative-project',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiCreativeProjectClientListCreativeProjectClientList
  extends Schema.CollectionType {
  collectionName: 'creative_project_client_lists';
  info: {
    singularName: 'creative-project-client-list';
    pluralName: 'creative-project-client-lists';
    displayName: '2. Creative Project Client Lists';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    MainPhoto: Attribute.Media & Attribute.Required;
    Slug: Attribute.UID<
      'api::creative-project-client-list.creative-project-client-list',
      'Name'
    > &
      Attribute.Required;
    Type: Attribute.Enumeration<
      ['Product Photography', 'Design Graphics', 'Social Media Content']
    > &
      Attribute.Required;
    DynamicGallery: Attribute.DynamicZone<
      [
        'gallery.four-photos',
        'gallery.single-photo',
        'gallery.text-description',
        'gallery.three-photos',
        'gallery.two-photos',
        'gallery.video',
        'shared.image-with-processing'
      ]
    >;
    Description: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::creative-project-client-list.creative-project-client-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::creative-project-client-list.creative-project-client-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomePageHomePage extends Schema.SingleType {
  collectionName: 'home_pages';
  info: {
    singularName: 'home-page';
    pluralName: 'home-pages';
    displayName: '2. HomePage';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    OurClient: Attribute.Component<'homepage-components.our-clients-block'>;
    AlertBar: Attribute.Component<'shared.test'>;
    Welcome: Attribute.Component<'homepage-components.welcome-block'>;
    ServiceLists: Attribute.Component<
      'homepage-components.services-list',
      true
    >;
    SEO: Attribute.Component<'shared.seo'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.desc-with-pic', 'shared.pic-with-title']
    >;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    ServicePageTitle: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Our Services'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::home-page.home-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMainLayoutMainLayout extends Schema.SingleType {
  collectionName: 'main_layouts';
  info: {
    singularName: 'main-layout';
    pluralName: 'main-layouts';
    displayName: '1. Main Layout';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
    FavIcon: Attribute.Media & Attribute.Required;
    Menu: Attribute.Component<'layout.menu', true>;
    SocialMedia: Attribute.Component<'layout.social-media', true>;
    SocialMediaCTA: Attribute.String & Attribute.Required;
    MenuTitle: Attribute.String & Attribute.Required;
    QNATitle: Attribute.String & Attribute.Required;
    Question: Attribute.Component<'layout.qna', true>;
    AdditionalMenu: Attribute.Component<'layout.menu', true>;
    Location: Attribute.Component<'layout.location-and-contact'>;
    AdditionalMenuTitle: Attribute.String;
    LocationTitle: Attribute.String & Attribute.Required;
    AltLogo: Attribute.Media & Attribute.Required;
    Copyright: Attribute.String & Attribute.Required;
    AdditionalInfo: Attribute.RichText & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::main-layout.main-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::main-layout.main-layout',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhPortofolioPhPortofolio extends Schema.CollectionType {
  collectionName: 'ph_portofolios';
  info: {
    singularName: 'ph-portofolio';
    pluralName: 'ph-portofolios';
    displayName: '4A. PH Portofolio';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Description: Attribute.Text;
    MediaURL: Attribute.String & Attribute.Required;
    Type: Attribute.Enumeration<
      [
        'Content',
        'Short Film',
        'Event Documentation',
        'Documentary Film',
        'Music Video',
        'Commercial Video'
      ]
    > &
      Attribute.Required;
    Thumbnail: Attribute.Media & Attribute.Required;
    UploadedMedia: Attribute.Media;
    IsUploadedMedia: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Slug: Attribute.UID<'api::ph-portofolio.ph-portofolio', 'Name'> &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ph-portofolio.ph-portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ph-portofolio.ph-portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhQuoteListPhQuoteList extends Schema.CollectionType {
  collectionName: 'ph_quote_lists';
  info: {
    singularName: 'ph-quote-list';
    pluralName: 'ph-quote-lists';
    displayName: '4B. PH Quote Lists';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    ProjectTitle: Attribute.String & Attribute.Required;
    ProjectType: Attribute.Enumeration<
      [
        'Content',
        'Short Film',
        'Event Documentation',
        'Documentary Film',
        'Music Video',
        'Commercial Video'
      ]
    >;
    EstimatedBudget: Attribute.Enumeration<
      [
        '< IDR 5.000.000',
        'IDR 5.000.000 - 10.000.000',
        'IDR 10.000.000 - 100.000.000',
        'IDR 100.000.000 - 500.000.000',
        '> IDR 500.000.000'
      ]
    >;
    Reference: Attribute.String;
    ProjectDescription: Attribute.Text;
    FirstName: Attribute.String;
    LastName: Attribute.String;
    OrganizationName: Attribute.String;
    Email: Attribute.String;
    PhoneNumber: Attribute.BigInteger;
    Brief: Attribute.Media & Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::ph-quote-list.ph-quote-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::ph-quote-list.ph-quote-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhotoBoothPhotoBooth extends Schema.SingleType {
  collectionName: 'photo_booths';
  info: {
    singularName: 'photo-booth';
    pluralName: 'photo-booths';
    displayName: '9. Photo Booth';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String;
    SEO: Attribute.Component<'shared.seo'>;
    CallToAction: Attribute.Component<'shared.call-to-action'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.pic-with-title', 'shared.desc-with-pic']
    >;
    FramePhotoBooth: Attribute.Component<'photo-booth.frame-photobooth'>;
    Testimonial: Attribute.Component<'photo-booth.testimonial'>;
    WhatYouGot: Attribute.Component<'photo-booth.what-you-got'>;
    Carousel: Attribute.Component<'photo-booth.photo-booth-carousel'>;
    AlertBar: Attribute.Component<'shared.test'>;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::photo-booth.photo-booth',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::photo-booth.photo-booth',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhotographyPhotography extends Schema.SingleType {
  collectionName: 'photographies';
  info: {
    singularName: 'photography';
    pluralName: 'photographies';
    displayName: '7. Photography';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SEO: Attribute.Component<'shared.seo'>;
    CallToAction: Attribute.Component<'shared.call-to-action'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.pic-with-title', 'shared.desc-with-pic']
    >;
    Carousel: Attribute.Component<'shared.carousel-images', true>;
    AlertBar: Attribute.Component<'shared.test'>;
    GalleryTitle: Attribute.String & Attribute.Required;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::photography.photography',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::photography.photography',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhotographyClientListPhotographyClientList
  extends Schema.CollectionType {
  collectionName: 'photography_clients';
  info: {
    singularName: 'photography-client-list';
    pluralName: 'photography-client-lists';
    displayName: '3B. Photography Client List';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    MainPhoto: Attribute.Media & Attribute.Required;
    Slug: Attribute.UID<
      'api::photography-client-list.photography-client-list',
      'Name'
    > &
      Attribute.Required;
    Gallery: Attribute.Media & Attribute.Required;
    PhotographySubCategory: Attribute.Relation<
      'api::photography-client-list.photography-client-list',
      'manyToOne',
      'api::photography-subcategory-list.photography-subcategory-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::photography-client-list.photography-client-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::photography-client-list.photography-client-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPhotographySubcategoryListPhotographySubcategoryList
  extends Schema.CollectionType {
  collectionName: 'photography_subcategory';
  info: {
    singularName: 'photography-subcategory-list';
    pluralName: 'photography-subcategory-lists';
    displayName: '3A. Photography Subcategory';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SubcategoryName: Attribute.String & Attribute.Required & Attribute.Unique;
    Type: Attribute.Enumeration<
      [
        'Couple Sessions',
        'Foto Group',
        'Wisuda',
        'Fashion',
        'Maternity',
        'Foto Profil',
        'Dokumentasi'
      ]
    > &
      Attribute.Required;
    PhotographyClientLists: Attribute.Relation<
      'api::photography-subcategory-list.photography-subcategory-list',
      'oneToMany',
      'api::photography-client-list.photography-client-list'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::photography-subcategory-list.photography-subcategory-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::photography-subcategory-list.photography-subcategory-list',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPreweddingWeddingPreweddingWedding
  extends Schema.CollectionType {
  collectionName: 'prewedding_weddings';
  info: {
    singularName: 'prewedding-wedding';
    pluralName: 'prewedding-weddings';
    displayName: '1. Wedding Client Lists';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    MainPhoto: Attribute.Media & Attribute.Required;
    Description: Attribute.Text;
    Slug: Attribute.UID<'api::prewedding-wedding.prewedding-wedding', 'Name'> &
      Attribute.Required;
    Type: Attribute.Enumeration<['Engagement', 'Pre-Wedding', 'Wedding']> &
      Attribute.Required;
    DynamicGalleryGrids: Attribute.DynamicZone<
      [
        'gallery.four-photos',
        'gallery.two-photos',
        'gallery.three-photos',
        'gallery.text-description',
        'gallery.single-photo',
        'gallery.video'
      ]
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::prewedding-wedding.prewedding-wedding',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::prewedding-wedding.prewedding-wedding',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiProductionHouseProductionHouse extends Schema.SingleType {
  collectionName: 'production_houses';
  info: {
    singularName: 'production-house';
    pluralName: 'production-houses';
    displayName: '8. Production House';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SEO: Attribute.Component<'shared.seo'>;
    CallToAction: Attribute.Component<'shared.call-to-action'>;
    DynamicContents: Attribute.DynamicZone<['shared.desc-with-pic']>;
    Carousel: Attribute.Component<'shared.carousel-images', true>;
    AlertBar: Attribute.Component<'shared.test'>;
    GalleryTitle: Attribute.String;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::production-house.production-house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::production-house.production-house',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPromotionPromotion extends Schema.CollectionType {
  collectionName: 'promotions';
  info: {
    singularName: 'promotion';
    pluralName: 'promotions';
    displayName: 'Promotion Banner';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Description: Attribute.String;
    URL: Attribute.String & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
    Category: Attribute.Enumeration<
      [
        'Self-Photo Studio',
        'Wedding',
        'Fotografi',
        'Creative Project',
        'Production House',
        'Photo Booth'
      ]
    > &
      Attribute.Required;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::promotion.promotion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::promotion.promotion',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSelfPhotoStudioSelfPhotoStudio extends Schema.SingleType {
  collectionName: 'self_photo_studios';
  info: {
    singularName: 'self-photo-studio';
    pluralName: 'self-photo-studios';
    displayName: '4. Self-Photo Studio';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    AlertBar: Attribute.Component<'shared.test'>;
    PriceLists: Attribute.Component<'self-photo-studio.pricelist-block'>;
    ColorChoices: Attribute.Component<'self-photo-studio.color-choices-block'>;
    CallToAction: Attribute.Component<'self-photo-studio.self-photo-cta'>;
    Header: Attribute.Component<'self-photo-studio.self-photo-header'>;
    SEO: Attribute.Component<'shared.seo'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.pic-with-title', 'shared.desc-with-pic']
    >;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::self-photo-studio.self-photo-studio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::self-photo-studio.self-photo-studio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiWeddingPageWeddingPage extends Schema.SingleType {
  collectionName: 'wedding_pages';
  info: {
    singularName: 'wedding-page';
    pluralName: 'wedding-pages';
    displayName: '5. Wedding Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    SEO: Attribute.Component<'shared.seo'>;
    CallToAction: Attribute.Component<'shared.call-to-action'>;
    DynamicContents: Attribute.DynamicZone<
      ['shared.pic-with-title', 'shared.desc-with-pic']
    >;
    Carousel: Attribute.Component<'shared.carousel-images', true>;
    AlertBar: Attribute.Component<'shared.test', true>;
    GalleryTitle: Attribute.String & Attribute.Required;
    EnablePromotion: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::wedding-page.wedding-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::wedding-page.wedding-page',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-us.about-us': ApiAboutUsAboutUs;
      'api::creative-project.creative-project': ApiCreativeProjectCreativeProject;
      'api::creative-project-client-list.creative-project-client-list': ApiCreativeProjectClientListCreativeProjectClientList;
      'api::home-page.home-page': ApiHomePageHomePage;
      'api::main-layout.main-layout': ApiMainLayoutMainLayout;
      'api::ph-portofolio.ph-portofolio': ApiPhPortofolioPhPortofolio;
      'api::ph-quote-list.ph-quote-list': ApiPhQuoteListPhQuoteList;
      'api::photo-booth.photo-booth': ApiPhotoBoothPhotoBooth;
      'api::photography.photography': ApiPhotographyPhotography;
      'api::photography-client-list.photography-client-list': ApiPhotographyClientListPhotographyClientList;
      'api::photography-subcategory-list.photography-subcategory-list': ApiPhotographySubcategoryListPhotographySubcategoryList;
      'api::prewedding-wedding.prewedding-wedding': ApiPreweddingWeddingPreweddingWedding;
      'api::production-house.production-house': ApiProductionHouseProductionHouse;
      'api::promotion.promotion': ApiPromotionPromotion;
      'api::self-photo-studio.self-photo-studio': ApiSelfPhotoStudioSelfPhotoStudio;
      'api::wedding-page.wedding-page': ApiWeddingPageWeddingPage;
    }
  }
}
