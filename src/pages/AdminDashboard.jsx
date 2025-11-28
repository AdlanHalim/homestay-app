import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { supabase } from '../supabaseClient';
import { FaTrash } from 'react-icons/fa';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ guest: '', start: '', end: '', unit: 'Unit 1' });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        const { data, error } = await supabase
            .from('bookings')
            .select('*')
            .order('start_date', { ascending: true });

        if (error) console.error('Ralat mengambil tempahan:', error);
        else setBookings(data);
    };

    const handleAddBooking = async (e) => {
        e.preventDefault();
        const { error } = await supabase
            .from('bookings')
            .insert([
                {
                    guest_info: newBooking.guest,
                    start_date: newBooking.start,
                    end_date: newBooking.end,
                    unit: newBooking.unit,
                    status: 'booked'
                }
            ]);

        if (error) {
            alert('Ralat menambah tempahan: ' + error.message);
        } else {
            setNewBooking({ guest: '', start: '', end: '', unit: 'Unit 1' });
            fetchBookings();
        }
    };

    const handleDeleteBooking = async (id) => {
        if (!window.confirm('Adakah anda pasti mahu memadam tempahan ini?')) return;

        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', id);

        if (error) {
            alert('Ralat memadam tempahan: ' + error.message);
        } else {
            fetchBookings();
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin';
    };

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <h1 className="text-headline-small">Papan Pemuka</h1>
                <Button variant="secondary" onClick={handleLogout} style={{ padding: '8px 16px', fontSize: '14px' }}>Log Keluar</Button>
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
                <Card>
                    <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Tambah Tempahan</h2>
                    <form onSubmit={handleAddBooking} style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr' }}>
                        <input
                            type="text"
                            placeholder="Nama Tetamu"
                            value={newBooking.guest}
                            onChange={(e) => setNewBooking({ ...newBooking, guest: e.target.value })}
                            style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', fontSize: '16px' }}
                            required
                        />

                        <div>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Unit</label>
                            <select
                                value={newBooking.unit}
                                onChange={(e) => setNewBooking({ ...newBooking, unit: e.target.value })}
                                style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', fontSize: '16px', backgroundColor: 'white' }}
                            >
                                <option value="Unit 1">Unit 1</option>
                                <option value="Unit 2">Unit 2</option>
                                <option value="Unit 3">Unit 3</option>
                                <option value="Unit 4">Unit 4</option>
                            </select>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Mula</label>
                                <input
                                    type="date"
                                    value={newBooking.start}
                                    onChange={(e) => setNewBooking({ ...newBooking, start: e.target.value })}
                                    style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', fontSize: '16px' }}
                                    required
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Tamat</label>
                                <input
                                    type="date"
                                    value={newBooking.end}
                                    onChange={(e) => setNewBooking({ ...newBooking, end: e.target.value })}
                                    style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box', fontSize: '16px' }}
                                    required
                                />
                            </div>
                        </div>
                        <Button type="submit" variant="primary" style={{ padding: '16px' }}>Tambah</Button>
                    </form>
                </Card>

                <section>
                    <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Tempahan Semasa</h2>
                    {/* Mobile-friendly list view instead of table */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {bookings.length === 0 ? (
                            <p style={{ textAlign: 'center', color: 'var(--md-sys-color-outline)' }}>Tiada tempahan semasa.</p>
                        ) : (
                            bookings.map(booking => (
                                <Card key={booking.id} variant="variant" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{booking.guest_info}</span>
                                        <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--md-sys-color-primary)' }}>{booking.unit || 'Unit 1'}</span>
                                        <span style={{ fontSize: '14px', color: 'var(--md-sys-color-on-surface-variant)' }}>
                                            {booking.start_date} - {booking.end_date}
                                        </span>
                                        <span style={{
                                            fontSize: '12px',
                                            padding: '2px 8px',
                                            borderRadius: '12px',
                                            backgroundColor: 'var(--md-sys-color-primary-container)',
                                            color: 'var(--md-sys-color-on-primary-container)',
                                            width: 'fit-content'
                                        }}>
                                            {booking.status}
                                        </span>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        style={{
                                            padding: '12px',
                                            backgroundColor: 'var(--md-sys-color-error-container)',
                                            color: 'var(--md-sys-color-on-error-container)',
                                            minWidth: 'auto',
                                            borderRadius: '50%'
                                        }}
                                        onClick={() => handleDeleteBooking(booking.id)}
                                        aria-label="Padam Tempahan"
                                    >
                                        <FaTrash />
                                    </Button>
                                </Card>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AdminDashboard;
