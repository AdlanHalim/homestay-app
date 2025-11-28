import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { FaArrowLeft } from 'react-icons/fa';

const GalleryPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = [
        { id: 'all', label: 'Semua' },
        { id: 'unit1', label: 'Unit 1' },
        { id: 'unit2', label: 'Unit 2' },
        { id: 'unit3', label: 'Unit 3' },
        { id: 'unit4', label: 'Unit 4' },
    ];

    const images = [
        { src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit1', alt: 'Unit 1 - Bilik Tidur' },
        { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit1', alt: 'Unit 1 - Ruang Tamu' },
        { src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit2', alt: 'Unit 2 - Dapur' },
        { src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit2', alt: 'Unit 2 - Bilik Air' },
        { src: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit3', alt: 'Unit 3 - Pemandangan' },
        { src: 'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit3', alt: 'Unit 3 - Bilik Tidur' },
        { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit4', alt: 'Unit 4 - Ruang Santai' },
        { src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit4', alt: 'Unit 4 - Ruang Makan' },
        { src: 'https://images.unsplash.com/photo-1620626012053-1c167f7ebc8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit1', alt: 'Unit 1 - Bilik Air' },
        { src: 'https://images.unsplash.com/photo-1573391205525-37d3814a9854?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80', category: 'unit2', alt: 'Unit 2 - Luar' },
    ];

    const filteredImages = activeCategory === 'all'
        ? images
        : images.filter(img => img.category === activeCategory);

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>
            <div style={{ marginBottom: '24px' }}>
                <Link to="/#info" style={{ textDecoration: 'none' }}>
                    <Button variant="secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <FaArrowLeft /> Kembali
                    </Button>
                </Link>
            </div>

            <h1 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Galeri Homestay</h1>

            {/* Category Filter */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: 'none',
                            backgroundColor: activeCategory === cat.id ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-surface-variant)',
                            color: activeCategory === cat.id ? 'var(--md-sys-color-on-primary)' : 'var(--md-sys-color-on-surface-variant)',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s'
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '16px'
            }}>
                {filteredImages.map((img, index) => (
                    <div key={index} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{ width: '100%', height: '250px', objectFit: 'cover', display: 'block', transition: 'transform 0.3s' }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
