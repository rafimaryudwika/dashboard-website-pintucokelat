import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsMemberComponent extends Schema.Component {
  collectionName: 'components_about_us_member_components';
  info: {
    displayName: 'MemberComponent';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Role: Attribute.String;
    Photo: Attribute.Media;
  };
}

export interface AboutUsMembers extends Schema.Component {
  collectionName: 'components_about_us_members';
  info: {
    displayName: 'Members';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
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
    description: '';
  };
  attributes: {
    Description: Attribute.Text;
    RichDescription: Attribute.RichText;
    EnableRichDescription: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
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

export interface HomepageComponentsOurClient extends Schema.Component {
  collectionName: 'components_homepage_our_clients';
  info: {
    displayName: 'Client Logo';
    icon: 'user';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Logo: Attribute.Media & Attribute.Required;
    Width: Attribute.Enumeration<['Single', 'Double', 'Triple']> &
      Attribute.Required &
      Attribute.DefaultTo<'Single'>;
  };
}

export interface HomepageComponentsOurClientsBlock extends Schema.Component {
  collectionName: 'components_homepage_our_clients_blocks';
  info: {
    displayName: 'Our Clients Block';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Lists: Attribute.Component<'homepage-components.our-client', true> &
      Attribute.Required;
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
    ServiceName: Attribute.String & Attribute.Required;
    Tagline: Attribute.String & Attribute.Required;
    DefaultPhoto: Attribute.Media & Attribute.Required;
    ShuffledPhotos: Attribute.Media;
    URL: Attribute.String;
    Accessible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface HomepageComponentsWelcomeBlock extends Schema.Component {
  collectionName: 'components_homepage_welcome_blocks';
  info: {
    displayName: 'WelcomeBlock';
    icon: 'gate';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Tagline: Attribute.String & Attribute.Required;
    DefaultImage: Attribute.Media & Attribute.Required;
    Carousel: Attribute.Component<'shared.carousel-images', true>;
    EnableCarousel: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface LayoutLocationAndContact extends Schema.Component {
  collectionName: 'components_layout_location_and_contacts';
  info: {
    displayName: 'LocationAndContact';
    description: '';
  };
  attributes: {
    Address: Attribute.Text & Attribute.Required;
    Email: Attribute.String;
    PhoneNumber: Attribute.String & Attribute.Required;
    AddressURL: Attribute.String;
    ActualPhoneNumber: Attribute.BigInteger;
  };
}

export interface LayoutMenu extends Schema.Component {
  collectionName: 'components_layout_menus';
  info: {
    displayName: 'Menu';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
    Enabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Description: Attribute.String;
  };
}

export interface LayoutQna extends Schema.Component {
  collectionName: 'components_layout_qnas';
  info: {
    displayName: 'QNA';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    ContactTitle: Attribute.String & Attribute.Required;
    ContactType: Attribute.Enumeration<['WhatsApp', 'LINE', 'Instagram DM']> &
      Attribute.Required;
    URL: Attribute.String & Attribute.Required;
  };
}

export interface LayoutSocialMedia extends Schema.Component {
  collectionName: 'components_layout_social_medias';
  info: {
    displayName: 'Social Media';
    icon: 'earth';
    description: '';
  };
  attributes: {
    SocialMedia: Attribute.Enumeration<
      ['Facebook', 'X (Twitter)', 'Instagram', 'TikTok', 'YouTube']
    > &
      Attribute.Required;
    URL: Attribute.String & Attribute.Required;
    Description: Attribute.String;
    Enabled: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface PhotoBoothClientLists extends Schema.Component {
  collectionName: 'components_photo_booth_client_lists';
  info: {
    displayName: 'ClientLists';
    description: '';
  };
  attributes: {
    Photos: Attribute.Media & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
  };
}

export interface PhotoBoothFrameChoice extends Schema.Component {
  collectionName: 'components_photo_booth_frame_choices';
  info: {
    displayName: 'FrameChoice';
    icon: 'picture';
  };
  attributes: {
    FrameImage: Attribute.Media;
    Name: Attribute.String;
  };
}

export interface PhotoBoothFramePhotobooth extends Schema.Component {
  collectionName: 'components_photo_booth_frame_photobooths';
  info: {
    displayName: 'FramePhotobooth';
  };
  attributes: {
    Title: Attribute.String;
    FrameChoices: Attribute.Component<'photo-booth.frame-choice', true>;
    Notes: Attribute.RichText;
  };
}

export interface PhotoBoothPhotoBoothCarousel extends Schema.Component {
  collectionName: 'components_photo_booth_carousels';
  info: {
    displayName: 'PhotoBoothCarousel';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media;
    Images: Attribute.Component<'shared.carousel-images', true>;
  };
}

export interface PhotoBoothTestimonial extends Schema.Component {
  collectionName: 'components_photo_booth_testimonials';
  info: {
    displayName: 'Testimonial';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    ClientLists: Attribute.Component<'photo-booth.client-lists', true>;
  };
}

export interface PhotoBoothWhatYouGotLists extends Schema.Component {
  collectionName: 'components_photo_booth_what_you_got_lists';
  info: {
    displayName: 'WhatYouGotLists';
    icon: 'filter';
    description: '';
  };
  attributes: {
    Name: Attribute.Text & Attribute.Required;
  };
}

export interface PhotoBoothWhatYouGot extends Schema.Component {
  collectionName: 'components_photo_booth_what_you_gots';
  info: {
    displayName: 'WhatYouGot';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    WhatYouGotLists: Attribute.Component<
      'photo-booth.what-you-got-lists',
      true
    >;
  };
}

export interface SelfPhotoStudioColorCard extends Schema.Component {
  collectionName: 'components_selfphoto_colorcards';
  info: {
    displayName: 'ColorCard';
    icon: 'paint';
    description: '';
  };
  attributes: {
    Color: Attribute.String & Attribute.Required;
    Name: Attribute.String & Attribute.Required;
  };
}

export interface SelfPhotoStudioColorChoicesBlock extends Schema.Component {
  collectionName: 'components_selfphoto_colorchoices';
  info: {
    displayName: 'ColorChoicesBlock';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    ColorCard: Attribute.Component<'self-photo-studio.color-card', true>;
  };
}

export interface SelfPhotoStudioPricelistBlock extends Schema.Component {
  collectionName: 'components_selfphotostudio_pricelistblocks';
  info: {
    displayName: 'PricelistBlock';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Pricelists: Attribute.Component<'self-photo-studio.pricelist-card', true>;
    Notes: Attribute.String;
  };
}

export interface SelfPhotoStudioPricelistCard extends Schema.Component {
  collectionName: 'components_selfphotostudio_pricelistcards';
  info: {
    displayName: 'PricelistCard';
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    NamaPaket: Attribute.String;
    Harga: Attribute.String;
    JumlahOrang: Attribute.String;
    Durasi: Attribute.String;
    Deskripsi: Attribute.String;
    Photo: Attribute.Media;
    EnableDiscount: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    HargaDiskon: Attribute.String;
  };
}

export interface SelfPhotoStudioSelfPhotoCta extends Schema.Component {
  collectionName: 'components_self_photo_studio_self_photo_ctas';
  info: {
    displayName: 'SelfPhotoCTA';
    icon: 'volumeUp';
    description: '';
  };
  attributes: {
    CallToAction: Attribute.String & Attribute.Required;
    ButtonText: Attribute.String & Attribute.Required;
    URL: Attribute.String & Attribute.Required;
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
    PriceListButtonTitle: Attribute.String & Attribute.Required;
    PriceListFile: Attribute.Media;
    ContactURL: Attribute.String;
    ContactButtonTitle: Attribute.String & Attribute.Required;
  };
}

export interface SharedCarouselImages extends Schema.Component {
  collectionName: 'components_shared_carousel_images';
  info: {
    displayName: 'CarouselImages';
    description: '';
  };
  attributes: {
    PortraitImage: Attribute.Media & Attribute.Required;
    LandscapeImage: Attribute.Media & Attribute.Required;
    Description: Attribute.String;
    EnableURL: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    URL: Attribute.String;
  };
}

export interface SharedDescWithPic extends Schema.Component {
  collectionName: 'components_shared_desc_with_pics';
  info: {
    displayName: 'DescWithPic';
    description: '';
  };
  attributes: {
    CarouselImages: Attribute.Media;
    ImagePosition: Attribute.Enumeration<['Left', 'Right', 'Top']> &
      Attribute.Required &
      Attribute.DefaultTo<'Left'>;
    EnableCarousel: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Description: Attribute.RichText;
    DefaultImage: Attribute.Media;
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

export interface SharedPicWithTitle extends Schema.Component {
  collectionName: 'components_shared_pic_with_titles';
  info: {
    displayName: 'PicWithTitle';
    icon: 'picture';
  };
  attributes: {
    Title: Attribute.String;
    DefaultPicture1: Attribute.Media;
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

export interface SharedTest extends Schema.Component {
  collectionName: 'components_test_tests';
  info: {
    displayName: 'AlertBar';
    icon: 'bell';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    ClickableText: Attribute.String & Attribute.Required;
    ClickableURL: Attribute.String & Attribute.Required;
    Type: Attribute.Enumeration<
      ['Promotion', 'Announcement', 'FlashDeal', 'Important']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Promotion'>;
    Enable: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
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
      'homepage-components.our-client': HomepageComponentsOurClient;
      'homepage-components.our-clients-block': HomepageComponentsOurClientsBlock;
      'homepage-components.our-products-block': HomepageComponentsOurProductsBlock;
      'homepage-components.product-lists': HomepageComponentsProductLists;
      'homepage-components.services-list': HomepageComponentsServicesList;
      'homepage-components.welcome-block': HomepageComponentsWelcomeBlock;
      'layout.location-and-contact': LayoutLocationAndContact;
      'layout.menu': LayoutMenu;
      'layout.qna': LayoutQna;
      'layout.social-media': LayoutSocialMedia;
      'photo-booth.client-lists': PhotoBoothClientLists;
      'photo-booth.frame-choice': PhotoBoothFrameChoice;
      'photo-booth.frame-photobooth': PhotoBoothFramePhotobooth;
      'photo-booth.photo-booth-carousel': PhotoBoothPhotoBoothCarousel;
      'photo-booth.testimonial': PhotoBoothTestimonial;
      'photo-booth.what-you-got-lists': PhotoBoothWhatYouGotLists;
      'photo-booth.what-you-got': PhotoBoothWhatYouGot;
      'self-photo-studio.color-card': SelfPhotoStudioColorCard;
      'self-photo-studio.color-choices-block': SelfPhotoStudioColorChoicesBlock;
      'self-photo-studio.pricelist-block': SelfPhotoStudioPricelistBlock;
      'self-photo-studio.pricelist-card': SelfPhotoStudioPricelistCard;
      'self-photo-studio.self-photo-cta': SelfPhotoStudioSelfPhotoCta;
      'self-photo-studio.self-photo-header': SelfPhotoStudioSelfPhotoHeader;
      'shared.call-to-action': SharedCallToAction;
      'shared.carousel-images': SharedCarouselImages;
      'shared.desc-with-pic': SharedDescWithPic;
      'shared.meta-social': SharedMetaSocial;
      'shared.pic-with-title': SharedPicWithTitle;
      'shared.seo': SharedSeo;
      'shared.test': SharedTest;
    }
  }
}
