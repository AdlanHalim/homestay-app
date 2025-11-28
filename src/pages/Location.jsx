import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Location = () => {
    // Example coordinates (KLCC for demo purposes)
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.796646733236!2d101.71129331475744!3d3.157485397700684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1645498765432!5m2!1sen!2smy";
    const googleMapsLink = "https://goo.gl/maps/4Q8Q8Q8Q8Q8Q8Q8Q8"; // Replace with actual link

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>
            <h1 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Lokasi</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <Card style={{ padding: '0', overflow: 'hidden' }}>
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="300"
                        style={{ border: 0, display: 'block' }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Lokasi Homestay"
                    ></iframe>
                </Card>

                <div style={{ textAlign: 'center' }}>
                    <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Cara Ke Sini</h2>
                    <p className="text-body-large" style={{ marginBottom: '24px' }}>
                        Kami terletak di tengah bandar, mudah diakses dengan kereta atau pengangkutan awam.
                        Klik butang di bawah untuk membuka navigasi terus di Google Maps.
                    </p>
                    <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <Button variant="primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                            <FaMapMarkedAlt /> Buka di Google Maps <FaExternalLinkAlt size={12} />
                        </Button>
                    </a>
                </div>

                <section className="section-spacing">
                    <h2 className="text-title-large" style={{ marginBottom: '16px', textAlign: 'center' }}>Tarikan Berdekatan</h2>
                    <div className="grid-responsive">
                        <Card variant="variant">
                            <h3 className="text-title-medium">Taman Rekreasi</h3>
                            <p className="text-body-medium">5 minit berjalan kaki. Sesuai untuk jogging pagi.</p>
                        </Card>
                        <Card variant="variant">
                            <h3 className="text-title-medium">Pusat Membeli-belah</h3>
                            <p className="text-body-medium">10 minit memandu. Ada pawagam dan restoran.</p>
                        </Card>
                        <Card variant="variant">
                            <h3 className="text-title-medium">Stesen Keretapi</h3>
                            <p className="text-body-medium">15 minit memandu. Laluan terus ke lapangan terbang.</p>
                        </Card>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Location;
