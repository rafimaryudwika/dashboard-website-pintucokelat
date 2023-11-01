import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsMemberComponent extends Schema.Component {
  collectionName: 'components_about_us_member_components';
  info: {
    displayName: 'MemberComponent';
  };
  attributes: {
    name: Attribute.String;
    role: Attribute.String;
    photo: Attribute.Media;
  };
}

export interface AboutUsMembers extends Schema.Component {
  collectionName: 'components_about_us_members';
  info: {
    displayName: 'Members';
  };
  attributes: {
    title: Attribute.String;
    MemberList: Attribute.Component<'about-us.member-component', true>;
  };
}

export interface FotografiKlienFotografi extends Schema.Component {
  collectionName: 'components_fotografi_klien';
  info: {
    displayName: 'KlienFotografi';
  };
  attributes: {
    nama_klien: Attribute.String;
    foto_utama: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryFourPhotos extends Schema.Component {
  collectionName: 'components_gallery_four_photos';
  info: {
    displayName: 'FourPhotos';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Photo1: Attribute.Media & Attribute.Required;
    Photo2: Attribute.Media & Attribute.Required;
    Photo3: Attribute.Media & Attribute.Required;
    Photo4: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryPhotosBlock extends Schema.Component {
  collectionName: 'components_gallery_photos_blocks';
  info: {
    displayName: 'PhotosBlock';
    icon: 'layout';
  };
  attributes: {
    SinglePhoto: Attribute.Component<'gallery.single-photo', true>;
    TwoPhotos: Attribute.Component<'gallery.two-photos', true>;
    ThreePhotos: Attribute.Component<'gallery.three-photos', true>;
    FourPhotos: Attribute.Component<'gallery.four-photos', true>;
  };
}

export interface GallerySinglePhoto extends Schema.Component {
  collectionName: 'components_gallery_single_photos';
  info: {
    displayName: 'SinglePhoto';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Photo1: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryTextDescription extends Schema.Component {
  collectionName: 'components_gallery_text_descriptions';
  info: {
    displayName: 'TextDescription';
  };
  attributes: {
    Description: Attribute.Text;
  };
}

export interface GalleryThreePhotos extends Schema.Component {
  collectionName: 'components_gallery_three_photos';
  info: {
    displayName: 'ThreePhotos';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Photo1: Attribute.Media & Attribute.Required;
    Photo2: Attribute.Media & Attribute.Required;
    Photo3: Attribute.Media & Attribute.Required;
  };
}

export interface GalleryTwoPhotos extends Schema.Component {
  collectionName: 'components_gallery_two_photos';
  info: {
    displayName: 'TwoPhotos';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Photo1: Attribute.Media & Attribute.Required;
    Photo2: Attribute.Media & Attribute.Required;
  };
}

export interface GlobalComponentsCarousel extends Schema.Component {
  collectionName: 'components_global_components_carousels';
  info: {
    displayName: 'Carousel';
    icon: 'stack';
    description: '';
  };
  attributes: {
    images_landscape: Attribute.Media;
    image_portrait: Attribute.Media & Attribute.Required;
  };
}

export interface GlobalComponentsTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'AlertBar';
    icon: 'bell';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    clickable_text: Attribute.String;
    clickable_url: Attribute.String;
    type: Attribute.Enumeration<
      ['promotion', 'announcement', 'flash_deal', 'important']
    >;
    enable: Attribute.Boolean;
  };
}

export interface HomepageComponentsOurClient extends Schema.Component {
  collectionName: 'components_homepage_our_clients';
  info: {
    displayName: 'Client Logo';
    icon: 'user';
    description: '';
  };
  attributes: {
    nama: Attribute.String & Attribute.Required;
    width: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    logo: Attribute.Media;
  };
}

export interface HomepageComponentsOurClientsBlock extends Schema.Component {
  collectionName: 'components_homepage_our_clients_blocks';
  info: {
    displayName: 'Our Clients Block';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    Lists: Attribute.Component<'homepage-components.our-client', true>;
  };
}

export interface HomepageComponentsOurProductsBlock extends Schema.Component {
  collectionName: 'components_homepage_our_products_blocks';
  info: {
    displayName: 'Our Products Block';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    products: Attribute.Component<'homepage-components.product-lists', true>;
  };
}

export interface HomepageComponentsProductLists extends Schema.Component {
  collectionName: 'components_homepage_product_lists';
  info: {
    displayName: 'ProductCard';
    icon: 'cube';
    description: '';
  };
  attributes: {
    nama_produk: Attribute.String;
    tagline: Attribute.String;
    accessible: Attribute.Boolean;
    url: Attribute.String;
    main_image: Attribute.Media;
    slideshows: Attribute.Media;
  };
}

export interface HomepageComponentsServicesList extends Schema.Component {
  collectionName: 'components_homepage_components_services_lists';
  info: {
    displayName: 'ServicesList';
    description: '';
  };
  attributes: {
    service_name: Attribute.String & Attribute.Required & Attribute.Unique;
    tagline: Attribute.String;
    main_photo: Attribute.Media & Attribute.Required;
    shuffledPhotos: Attribute.Media;
    url: Attribute.String;
    url_accessible: Attribute.Boolean;
  };
}

export interface HomepageComponentsWelcomeBlock extends Schema.Component {
  collectionName: 'components_homepage_welcome_blocks';
  info: {
    displayName: 'WelcomeBlock';
    icon: 'gate';
  };
  attributes: {
    title: Attribute.String;
    tagline: Attribute.String;
    hero_image: Attribute.Media;
  };
}

export interface SelfPhotoStudioColorCard extends Schema.Component {
  collectionName: 'components_selfphoto_colorcards';
  info: {
    displayName: 'ColorCard';
    icon: 'paint';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    nama: Attribute.String & Attribute.Required;
  };
}

export interface SelfPhotoStudioColorChoicesBlock extends Schema.Component {
  collectionName: 'components_selfphoto_colorchoices';
  info: {
    displayName: 'ColorChoicesBlock';
    icon: 'chartBubble';
  };
  attributes: {
    heading: Attribute.String;
    ColorCard: Attribute.Component<'self-photo-studio.color-card', true>;
  };
}

export interface SelfPhotoStudioPricelistBlock extends Schema.Component {
  collectionName: 'components_selfphotostudio_pricelistblocks';
  info: {
    displayName: 'PricelistBlock';
    icon: 'landscape';
  };
  attributes: {
    title: Attribute.String;
    Pricelists: Attribute.Component<'self-photo-studio.pricelist-card', true>;
    catatan: Attribute.String;
  };
}

export interface SelfPhotoStudioPricelistCard extends Schema.Component {
  collectionName: 'components_selfphotostudio_pricelistcards';
  info: {
    displayName: 'PricelistCard';
    icon: 'shoppingCart';
  };
  attributes: {
    NamaPaket: Attribute.String;
    Harga: Attribute.String;
    JumlahOrang: Attribute.String;
    Durasi: Attribute.String;
    Deskripsi: Attribute.String;
    Photo: Attribute.Media;
  };
}

export interface SelfPhotoStudioSelfPhotoCta extends Schema.Component {
  collectionName: 'components_self_photo_studio_self_photo_ctas';
  info: {
    displayName: 'SelfPhotoCTA';
    icon: 'volumeUp';
  };
  attributes: {
    CallToAction: Attribute.String;
    ButtonText: Attribute.String;
    URL: Attribute.String;
  };
}

export interface SelfPhotoStudioSelfPhotoHeader extends Schema.Component {
  collectionName: 'components_self_photo_studio_self_photo_headers';
  info: {
    displayName: 'SelfPhotoHeader';
    icon: 'landscape';
  };
  attributes: {
    Photos: Attribute.Media & Attribute.Required;
    FirstTagline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'The 1st Self-Photo Studio in Padang'>;
    SecondTagline: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'#GayamuKebebasanmu!'>;
  };
}

export interface SharedCallToAction extends Schema.Component {
  collectionName: 'components_shared_call_to_actions';
  info: {
    displayName: 'CallToAction';
    description: '';
  };
  attributes: {
    CTATitle: Attribute.String & Attribute.Required;
    deskripsi: Attribute.String;
    PriceListFile: Attribute.Media;
    ContactURL: Attribute.String;
  };
}

export interface SharedDescWithPic extends Schema.Component {
  collectionName: 'components_shared_desc_with_pics';
  info: {
    displayName: 'DescWithPic';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.member-component': AboutUsMemberComponent;
      'about-us.members': AboutUsMembers;
      'fotografi.klien-fotografi': FotografiKlienFotografi;
      'gallery.four-photos': GalleryFourPhotos;
      'gallery.photos-block': GalleryPhotosBlock;
      'gallery.single-photo': GallerySinglePhoto;
      'gallery.text-description': GalleryTextDescription;
      'gallery.three-photos': GalleryThreePhotos;
      'gallery.two-photos': GalleryTwoPhotos;
      'global-components.carousel': GlobalComponentsCarousel;
      'global-components.test': GlobalComponentsTest;
      'homepage-components.our-client': HomepageComponentsOurClient;
      'homepage-components.our-clients-block': HomepageComponentsOurClientsBlock;
      'homepage-components.our-products-block': HomepageComponentsOurProductsBlock;
      'homepage-components.product-lists': HomepageComponentsProductLists;
      'homepage-components.services-list': HomepageComponentsServicesList;
      'homepage-components.welcome-block': HomepageComponentsWelcomeBlock;
      'self-photo-studio.color-card': SelfPhotoStudioColorCard;
      'self-photo-studio.color-choices-block': SelfPhotoStudioColorChoicesBlock;
      'self-photo-studio.pricelist-block': SelfPhotoStudioPricelistBlock;
      'self-photo-studio.pricelist-card': SelfPhotoStudioPricelistCard;
      'self-photo-studio.self-photo-cta': SelfPhotoStudioSelfPhotoCta;
      'self-photo-studio.self-photo-header': SelfPhotoStudioSelfPhotoHeader;
      'shared.call-to-action': SharedCallToAction;
      'shared.desc-with-pic': SharedDescWithPic;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
