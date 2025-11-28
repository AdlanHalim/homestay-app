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

            {/* Unit Pricing Section */}
            <section id="harga">
                <h2 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '16px' }}>Pilihan Unit</h2>
                <div className="grid-compact-mobile">
                    {[1, 2, 3, 4].map((num) => (
                        <Card key={num} variant="surface" style={{ textAlign: 'center', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <Link to="/gallery" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <div style={{ position: 'relative', height: '120px', overflow: 'hidden' }}>
                                    <img
                                        src={`https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60`}
                                        alt={`Unit ${num}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                                        onMouseOver={e => {
                                            e.currentTarget.style.transform = 'scale(1.05)';
                                            e.currentTarget.nextSibling.style.opacity = '1';
                                        }}
                                        onMouseOut={e => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.nextSibling.style.opacity = '0';
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        backgroundColor: 'rgba(0,0,0,0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s',
                                        pointerEvents: 'none'
                                    }}>
                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '12px' }}>
                                            <FaImages /> Galeri
                                        </span>
                                    </div>
                                </div>
                                <div style={{ padding: '8px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 className="text-title-medium" style={{ marginBottom: '2px', color: 'var(--md-sys-color-primary)', fontSize: '16px' }}>Unit {num}</h3>
                                    <p className="text-title-large" style={{ marginBottom: '2px', fontWeight: 'bold', fontSize: '18px' }}>RM200</p>
                                    <p className="text-body-small" style={{ color: 'var(--md-sys-color-outline)', fontSize: '10px' }}>2-4 org</p>
                                </div>
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
