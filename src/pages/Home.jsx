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
                minHeight: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                position: 'relative',
                padding: '20px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}></div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
                    <h1 className="text-display-small" style={{ marginBottom: '16px', color: 'white' }}>Selamat Datang ke Homestay Nature</h1>
                    <p className="text-headline-small" style={{ marginBottom: '24px', color: '#E0E4D6' }}>Nikmati ketenangan di tengah alam semula jadi.</p>
                    <HashLink smooth to="/#kekosongan">
                        <Button variant="primary">Tempah Sekarang</Button>
                    </HashLink>
                </div>
            </div>

            {/* Highlights Section */}
            <div className="container">
                <h2 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '24px' }}>Kenapa Pilih Kami?</h2>
                <div className="grid-responsive">
                    <Card>
                        <h3 className="text-title-large" style={{ marginBottom: '8px' }}>Suasana Selesa</h3>
                        <p className="text-body-large">Direka untuk membuat anda berasa seperti di rumah dengan hiasan dalaman yang hangat dan perabot yang selesa.</p>
                    </Card>
                    <Card>
                        <h3 className="text-title-large" style={{ marginBottom: '8px' }}>Pemandangan Indah</h3>
                        <p className="text-body-large">Bangun dengan pemandangan gunung yang menakjubkan dan kehijauan yang subur terus dari tingkap anda.</p>
                    </Card>
                    <Card>
                        <h3 className="text-title-large" style={{ marginBottom: '8px' }}>Kemudahan Moden</h3>
                        <p className="text-body-large">Nikmati Wi-Fi percuma, dapur yang lengkap, dan sistem hiburan pintar.</p>
                    </Card>
                </div>
            </div>

            {/* Property Details Section */}
            <div id="info">
                <PropertyDetails />
            </div>

            {/* Location Section */}
            <div id="lokasi">
                <Location />
            </div>

            {/* Calendar Section */}
            <div id="kekosongan">
                <CalendarPage />
            </div>
        </div>
    );
};

export default Home;
