export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  // Hondata Products
  {
    id: 'hondata-kpro-v4',
    name: 'Hondata Kpro V4',
    brand: 'Hondata',
    category: 'Engine Management & Electronics',
    price: 1295,
    description: 'Complete programmable engine management system for Honda/Acura',
    inStock: true
  },
  {
    id: 'hondata-s300',
    name: 'Hondata S300',
    brand: 'Hondata',
    category: 'Engine Management & Electronics',
    price: 895,
    description: 'Advanced tuning solution for OBD1 Honda/Acura vehicles',
    inStock: true
  },
  {
    id: 'hondata-flashpro',
    name: 'Hondata Flashpro',
    brand: 'Hondata',
    category: 'Engine Management & Electronics',
    price: 695,
    description: 'User-friendly tuning solution for modern Honda vehicles',
    inStock: true
  },
  
  // Haltech Products
  {
    id: 'haltech-elite-2500',
    name: 'Haltech Elite 2500',
    brand: 'Haltech',
    category: 'Engine Management & Electronics',
    price: 2495,
    description: 'Professional standalone ECU for high-performance builds',
    inStock: true
  },
  {
    id: 'haltech-platinum-sport-1000',
    name: 'Haltech Platinum Sport 1000',
    brand: 'Haltech',
    category: 'Engine Management & Electronics',
    price: 1595,
    description: 'Entry-level standalone ECU with advanced features',
    inStock: true
  },
  
  // Ktuner Products
  {
    id: 'ktuner-rsx-types',
    name: 'Ktuner 02-06 RSX Type S',
    brand: 'Ktuner',
    category: 'Engine Management & Electronics',
    price: 595,
    description: 'End-user tuning solution for RSX Type S',
    inStock: true
  },
  {
    id: 'ktuner-civic-si-flash',
    name: 'Ktuner 2006-2011 Civic SI Flash Cable',
    brand: 'Ktuner',
    category: 'Engine Management & Electronics',
    price: 495,
    description: 'Flash cable for self-tuning Civic SI',
    inStock: true
  },
  
  // Fuel System
  {
    id: 'fic-1650cc-injectors',
    name: 'FIC 1650cc Injector Set',
    brand: 'Fuel Injector Clinic',
    category: 'Fuel Systems',
    price: 895,
    description: 'High-flow injectors for boosted applications',
    inStock: true
  },
  {
    id: 'fic-1000cc-injectors',
    name: 'FIC 1000cc Injector Set',
    brand: 'Fuel Injector Clinic',
    category: 'Fuel Systems',
    price: 695,
    description: 'Mid-range injectors for moderate builds',
    inStock: true
  },
  {
    id: 'fuelab-fpr',
    name: 'Fuelab Fuel Pressure Regulator',
    brand: 'Fuelab',
    category: 'Fuel Systems',
    price: 295,
    description: 'Adjustable fuel pressure regulator',
    inStock: true
  },
  
  // Turbo & Performance
  {
    id: 'borgwarner-s300sx',
    name: 'Borg Warner S300SX 9180 Turbo',
    brand: 'Borg Warner',
    category: 'Performance Parts',
    price: 1895,
    description: 'High-performance turbocharger for serious builds',
    inStock: true
  },
  {
    id: 's2000-race-header',
    name: '00-09 Honda S2000 Race Header',
    brand: 'Turbogixxer Tuning',
    category: 'Performance Parts',
    price: 695,
    description: 'Full-length race header for S2000',
    inStock: true
  },
  {
    id: 'rsx-race-header',
    name: '02-06 Acura RSX Race Header',
    brand: 'Turbogixxer Tuning',
    category: 'Performance Parts',
    price: 595,
    description: 'Full-length race header for RSX',
    inStock: true
  },
  
  // Sensors
  {
    id: 'sf-4bar-map-k-series',
    name: 'Speed Factory K-Series 4 Bar MAP Sensor',
    brand: 'Speed Factory',
    category: 'Sensors',
    price: 125,
    description: '4 bar MAP sensor for K-series engines',
    inStock: true
  },
  {
    id: 'flex-fuel-sensor',
    name: 'E85 Flex Fuel Sensor',
    brand: 'AEM',
    category: 'Sensors',
    price: 195,
    description: 'Ethanol content sensor for flex fuel tuning',
    inStock: true
  },
  
  // Wiring
  {
    id: 'rywire-obd2a-obd1',
    name: 'Rywire OBD2A to OBD1 ECU Jumper',
    brand: 'Rywire',
    category: 'Wiring & Connectors',
    price: 85,
    description: 'ECU conversion harness',
    inStock: true
  },
  {
    id: 'ktuner-ecu-harness',
    name: 'Ktuner 02-04 to 05-06 ECU Harness',
    brand: 'Ktuner',
    category: 'Wiring & Connectors',
    price: 95,
    description: 'ECU adapter harness for Ktuner',
    inStock: true
  }
];

export const getProductsByBrand = (brand: string) => {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
};

export const getProductsByCategory = (category: string) => {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
