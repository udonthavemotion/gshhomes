import { HomeModel } from '../types';
import analysisData from './double-wide-homes-analysis.json';

// Helper function to get correct gallery paths from analysis data
const getGalleryPaths = (modelId: string): string[] => {
  const model = analysisData.models.find(m => m.id === modelId);
  if (model && model.images) {
    return model.images.map(img => img.path);
  }
  return [];
};

export const DOUBLE_WIDE_HOMES: HomeModel[] = [
  {
    id: 'boujee',
    name: 'The Boujee',
    manufacturer: 'Champion Homes',
    type: 'Double Wide',
    beds: 4,
    baths: 2,
    sqft: 2016,
    description: 'Sophisticated luxury in every detail. The Boujee features an open-concept living space with premium finishes, a gourmet kitchen with oversized island, and a spacious master suite with walk-in closet.',
    features: ['Open Floor Plan', 'Gourmet Kitchen', 'Master Suite', 'Walk-in Closets', 'Luxury Vinyl Flooring'],
    imageUrl: '/assets/images/Double Wide Homes/boujee/gulf_south_homes_boujee_gallery_03-600h.jpg',
    gallery: getGalleryPaths('boujee'),
    isFeatured: true,
  },
  {
    id: 'burton',
    name: 'The Burton',
    manufacturer: 'Sunshine Homes',
    type: 'Double Wide',
    beds: 3,
    baths: 2,
    sqft: 1680,
    description: 'Classic elegance meets modern comfort. The Burton offers a thoughtfully designed layout with spacious living areas, a well-appointed kitchen, and a private master retreat.',
    features: ['Split Bedroom Design', 'Open Kitchen', 'Covered Porch', 'Energy Efficient', 'Pantry Storage'],
    imageUrl: '/assets/images/Double Wide Homes/burton/gulf_south_homes_burton_gallery_04-600h.jpg',
    gallery: getGalleryPaths('burton'),
  },
  {
    id: 'washington',
    name: 'The Washington',
    manufacturer: 'Franklin Homes',
    type: 'Double Wide',
    beds: 5,
    baths: 3,
    sqft: 2448,
    description: 'Monumental design for grand living. The Washington is our most spacious double-wide, featuring multiple living areas, five bedrooms, and luxury finishes throughout.',
    features: ['5 Bedrooms', '3 Full Baths', 'Multiple Living Areas', 'Gourmet Kitchen', 'Master Suite with Sitting Area'],
    imageUrl: '/assets/images/Double Wide Homes/washington/gulf_south_homes_washington_gallery_01-0h.jpg',
    gallery: getGalleryPaths('washington'),
    isFeatured: true,
  },
];
