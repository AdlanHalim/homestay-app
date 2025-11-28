import React from 'react';
import Card from '../components/ui/Card';
import { FaWifi, FaTv, FaParking, FaSnowflake, FaUtensils, FaShower } from 'react-icons/fa';

const PropertyDetails = () => {
    const amenities = [
        { icon: <FaWifi />, name: 'Wi-Fi Percuma' },
        { icon: <FaTv />, name: 'TV Pintar' },
        { icon: <FaParking />, name: 'Parkir Percuma' },
        { icon: <FaSnowflake />, name: 'Penghawa Dingin' },
        { icon: <FaUtensils />, name: 'Dapur Lengkap' },
        { icon: <FaShower />, name: 'Pemanas Air' },
    ];

    const galleryImages = [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Living Room
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Bedroom
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Kitchen
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', // Bathroom
    ];

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>
            <h1 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Butiran Homestay</h1>

            {/* Gallery */}
            <section className="section-spacing">
                <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Galeri</h2>
                <div className="grid-responsive">
                    {galleryImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Galeri ${index + 1}`}
                            style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: 'var(--md-sys-shape-corner-medium)'
                            }}
                        />
                    ))}
                </div>
            </section>

            {/* Amenities */}
            <section>
                <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Kemudahan</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
                    {amenities.map((item, index) => (
                        <Card key={index} variant="variant" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '8px' }}>
                            <div style={{ fontSize: '24px', color: 'var(--md-sys-color-primary)' }}>{item.icon}</div>
                            <span className="text-body-medium">{item.name}</span>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PropertyDetails;
