import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FaWifi, FaTv, FaParking, FaSnowflake, FaUtensils, FaShower, FaImages } from 'react-icons/fa';

const PropertyDetails = () => {
    const amenities = [
        { icon: <FaWifi />, name: 'Wi-Fi Percuma' },
        { icon: <FaTv />, name: 'TV Pintar' },
        { icon: <FaParking />, name: 'Parkir Percuma' },
        { icon: <FaSnowflake />, name: 'Penghawa Dingin' },
        { icon: <FaUtensils />, name: 'Dapur Lengkap' },
        { icon: <FaShower />, name: 'Pemanas Air' },
    ];

    // 10 Images for preview (5 left, 5 right)
    const leftImages = [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    ];

    const rightImages = [
        'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1620626012053-1c167f7ebc8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1573391205525-37d3814a9854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    ];

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>

            {/* Gallery Section - Snap Point */}
            <section id="galeri" className="snap-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Galeri</h2>
                <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', cursor: 'pointer' }}>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            {leftImages.map((src, index) => (
                                <img key={`left-${index}`} src={src} alt="Gallery" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                            ))}
                        </div>
                        <div style={{ display: 'grid', gap: '8px' }}>
                            {rightImages.map((src, index) => (
                                <img key={`right-${index}`} src={src} alt="Gallery" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                            ))}
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        <Button variant="secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <FaImages /> Lihat Semua Gambar
                        </Button>
                    </div>
                </Link>
            </section>

            {/* Amenities Section - Snap Point */}
            <section id="kemudahan" className="snap-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Kemudahan</h2>
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
