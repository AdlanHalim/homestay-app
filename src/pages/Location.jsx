import React from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FaMapMarkedAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Location = () => {
    // Example coordinates (KLCC for demo purposes)
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3970.259376535152!2d100.45981007559219!3d5.675594332434248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDAnMzIuMSJOIDEwMMKwMjcnNDQuNiJF!5e0!3m2!1sen!2smy!4v1764326691135!5m2!1sen!2smy"
    const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=5.675594,100.459810"; // Updated with your coordinates

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>

            {/* Map Section */}
            <section id="lokasi-peta">
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
                </div>
            </section>

            <div className="section-separator"></div>

            {/* Attractions Section */}
            <section id="tarikan">
                <h2 className="text-headline-medium" style={{ marginBottom: '32px', textAlign: 'center' }}>Tarikan Berdekatan</h2>
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
    );
};

export default Location;
