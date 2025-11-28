import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import PropertyDetails from './PropertyDetails';
import Location from './Location';
import CalendarPage from './CalendarPage';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingBottom: '32px' }}>
            {/* Hero Section */}
            <div id="utama" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '80vh', /* Slightly reduced height */
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                padding: '20px',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)' /* Lighter overlay */
                }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                    <h1 className="text-display-small" style={{ marginBottom: '16px', color: 'white' }}>Selamat Datang ke Homestay Nature</h1>
                    <p className="text-headline-small" style={{ marginBottom: '24px', color: '#E0E4D6' }}>Nikmati ketenangan di tengah alam semula jadi.</p>
                    <HashLink smooth to="/#kekosongan">
                        <Button variant="primary">Tempah Sekarang</Button>
                    </HashLink>
                </div>
            </div>

            <div className="section-separator"></div>

            {/* Property Details Section (Galeri & Kemudahan) */}
            <div id="info">
                <PropertyDetails />
            </div>

            <div className="section-separator"></div>

            {/* Location Section (Lokasi & Tarikan) */}
            <div id="lokasi">
                <Location />
            </div>

            <div className="section-separator"></div>

            {/* Calendar Section */}
            <div id="kekosongan">
                <CalendarPage />
            </div>
        </div>
    );
};

export default Home;
