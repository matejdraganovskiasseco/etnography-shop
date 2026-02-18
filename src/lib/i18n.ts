export type Language = 'en' | 'mk';
export type Currency = 'EUR' | 'MKD';

export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      catalog: 'Catalog',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      title: 'Professional Camera Shop',
      subtitle: 'Discover premium analog and digital cameras, lenses, and accessories',
      featured: 'Featured Products',
      viewAll: 'View All Products',
      shopNow: 'Shop Now'
    },
    catalog: {
      title: 'Product Catalog',
      filters: 'Filters',
      sortBy: 'Sort by',
      priceLowHigh: 'Price: Low to High',
      priceHighLow: 'Price: High to Low',
      newest: 'Newest First',
      oldest: 'Oldest First',
      noProducts: 'No products found matching your criteria.',
      clearFilters: 'Clear Filters',
      filterBy: {
        brand: 'Brand',
        category: 'Category',
        type: 'Type',
        mount: 'Mount',
        condition: 'Condition',
        priceRange: 'Price Range'
      },
      categories: {
        camera: 'Cameras',
        lens: 'Lenses',
        accessory: 'Accessories'
      },
      types: {
        film: 'Film',
        digital: 'Digital',
        both: 'Both'
      },
      conditions: {
        likeNew: 'Like New',
        excellent: 'Excellent',
        veryGood: 'Very Good',
        good: 'Good',
        low: 'Low'
      }
    },
    product: {
      specifications: 'Specifications',
      condition: 'Condition',
      addToCart: 'DM to Buy',
      shareProduct: 'Share this product',
      relatedProducts: 'Related Products',
      gallery: 'Gallery',
      description: 'Description'
    },
    about: {
      title: 'About Us',
      description: 'We are passionate about photography and dedicated to providing the finest selection of cameras, lenses, and accessories for both professional and amateur photographers.',
      mission: 'Our Mission',
      missionText: 'To make quality photography equipment accessible to everyone while preserving the art and craft of photography.',
      expertise: 'Our Expertise',
      expertiseText: 'With over 15 years of experience in photography equipment, we carefully curate each item in our collection.'
    },
    contact: {
      title: 'Contact Us',
      description: 'Get in touch with us for any questions about our products or services.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      instagram: 'Instagram',
      phone: 'Phone',
      emailLabel: 'Email'
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      search: 'Search products...',
      language: 'Language',
      currency: 'Currency',
      price: 'Price',
      brand: 'Brand',
      category: 'Category',
      viewDetails: 'View Details',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      apply: 'Apply',
      cancel: 'Cancel',
      save: 'Save',
      edit: 'Edit',
      delete: 'Delete',
      confirm: 'Confirm',
      yes: 'Yes',
      no: 'No'
    }
  },
  mk: {
    nav: {
      home: 'Почетна',
      catalog: 'Каталог',
      about: 'За нас',
      contact: 'Контакт'
    },
    home: {
      title: 'Професионална Фото Продавница',
      subtitle: 'Откријте премиум аналогни и дигитални фотоапарати, обективи и додатоци',
      featured: 'Избрани Производи',
      viewAll: 'Види сите производи',
      shopNow: 'Купи сега'
    },
    catalog: {
      title: 'Каталог на Производи',
      filters: 'Филтри',
      sortBy: 'Подреди по',
      priceLowHigh: 'Цена: Ниска кон Висока',
      priceHighLow: 'Цена: Висока кон Ниска',
      newest: 'Најнови прво',
      oldest: 'Најстари прво',
      noProducts: 'Не се пронајдени производи што одговараат на вашите критериуми.',
      clearFilters: 'Исчисти Филтри',
      filterBy: {
        brand: 'Бренд',
        category: 'Категорија',
        type: 'Тип',
        mount: 'Монт',
        condition: 'Состојба',
        priceRange: 'Ценовен Опсег'
      },
      categories: {
        camera: 'Фотоапарати',
        lens: 'Обективи',
        accessory: 'Додатоци'
      },
      types: {
        film: 'Филм',
        digital: 'Дигитални',
        both: 'Сите'
      },
      conditions: {
        likeNew: 'Како Нов',
        excellent: 'Одлично',
        veryGood: 'Многу Добро',
        good: 'Добро',
        low: 'Ниско'
      }
    },
    product: {
      specifications: 'Спецификации',
      condition: 'Состојба',
      addToCart: 'Порака за Купување',
      shareProduct: 'Сподели го овој производ',
      relatedProducts: 'Поврзани Производи',
      gallery: 'Галерија',
      description: 'Опис'
    },
    about: {
      title: 'За Нас',
      description: 'Страствени сме за фотографија и посветени на обезбедување на најдобриот избор на фотоапарати, обективи и додатоци за професионални и аматерски фотографи.',
      mission: 'Наша Мисија',
      missionText: 'Да направиме квалитетна фотографска опрема достапна за сите додека го зачувуваме уметноста и занаетот на фотографијата.',
      expertise: 'Нашето Знаење',
      expertiseText: 'Со над 15 години искуство во фотографска опрема, внимателно курираме секој предмет во нашата колекција.'
    },
    contact: {
      title: 'Контактирајте не',
      description: 'Контактирајте не за какви било прашања за нашите производи или услуги.',
      name: 'Име',
      email: 'Е-пошта',
      message: 'Порака',
      send: 'Испрати Порака',
      instagram: 'Инстаграм',
      phone: 'Телефон',
      emailLabel: 'Е-пошта'
    },
    common: {
      loading: 'Вчитување...',
      error: 'Се појави грешка',
      search: 'Пребарај производи...',
      language: 'Јазик',
      currency: 'Валута',
      price: 'Цена',
      brand: 'Бренд',
      category: 'Категорија',
      viewDetails: 'Види Детали',
      back: 'Назад',
      next: 'Следно',
      previous: 'Претходно',
      close: 'Затвори',
      apply: 'Примени',
      cancel: 'Откажи',
      save: 'Зачувај',
      edit: 'Уреди',
      delete: 'Избриши',
      confirm: 'Потврди',
      yes: 'Да',
      no: 'Не'
    }
  }
};

export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let current: any = translations[lang];
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return path; // Return path if translation not found
    }
  }
  
  return typeof current === 'string' ? current : path;
}
