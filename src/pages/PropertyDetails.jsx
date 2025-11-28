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

    // 6 Images for preview (3 left, 3 right)
    const leftImages = [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    ];

    const rightImages = [
        'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    ];

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>

            {/* Gallery Section */}
            <section id="galeri">
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

            <div className="section-separator"></div>

            {/* Unit Pricing Section */}
            <section id="harga">
                <h2 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Pilihan Unit</h2>
                <div className="grid-responsive">
                    {[1, 2, 3, 4].map((num) => (
                        <Card key={num} variant="surface" style={{ textAlign: 'center', padding: '16px', overflow: 'hidden' }}>
                            <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                <div style={{ marginBottom: '16px', borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
                                    <img
                                        src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`}
                                        alt={`Unit ${num}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                </div>
                                <h3 className="text-title-large" style={{ marginBottom: '8px', color: 'var(--md-sys-color-primary)' }}>Unit {num}</h3>
                                <p className="text-display-small" style={{ marginBottom: '8px', fontSize: '24px', fontWeight: 'bold' }}>RM200<span style={{ fontSize: '14px', fontWeight: 'normal' }}>/malam</span></p>
                                <p className="text-body-medium" style={{ color: 'var(--md-sys-color-outline)' }}>Sesuai untuk 2-4 orang</p>
                            </Link>
                        </Card>
                    ))}
                </div>
            </section>

            <div className="section-separator"></div>

            {/* Amenities Section */}
            <section id="kemudahan">
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
