import React, { useState, useEffect } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { supabase } from '../supabaseClient';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [newBooking, setNewBooking] = useState({ guest: '', start: '', end: '' });

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
                    status: 'booked'
                }
            ]);

        if (error) {
            alert('Ralat menambah tempahan: ' + error.message);
        } else {
            setNewBooking({ guest: '', start: '', end: '' });
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
                <h1 className="text-headline-medium">Papan Pemuka Admin</h1>
                <Button variant="secondary" onClick={handleLogout} style={{ padding: '8px 16px', fontSize: '14px' }}>Log Keluar</Button>
            </div>

            <div style={{ display: 'grid', gap: '24px' }}>
                <Card>
                    <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Tambah Tempahan Baru</h2>
                    <form onSubmit={handleAddBooking} style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr' }}>
                        <input
                            type="text"
                            placeholder="Nama Tetamu"
                            value={newBooking.guest}
                            onChange={(e) => setNewBooking({ ...newBooking, guest: e.target.value })}
                            style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
                            required
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <input
                                type="date"
                                placeholder="Tarikh Mula"
                                value={newBooking.start}
                                onChange={(e) => setNewBooking({ ...newBooking, start: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
                                required
                            />
                            <input
                                type="date"
                                placeholder="Tarikh Tamat"
                                value={newBooking.end}
                                onChange={(e) => setNewBooking({ ...newBooking, end: e.target.value })}
                                style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ccc', width: '100%', boxSizing: 'border-box' }}
                                required
                            />
                        </div>
                        <Button type="submit" variant="primary">Tambah Tempahan</Button>
                    </form>
                </Card>

                <Card>
                    <h2 className="text-title-large" style={{ marginBottom: '16px' }}>Tempahan Semasa</h2>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--md-sys-color-outline)' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Tetamu</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Tarikh Mula</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Tarikh Tamat</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Status</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map(booking => (
                                    <tr key={booking.id} style={{ borderBottom: '1px solid var(--md-sys-color-surface-variant)' }}>
                                        <td style={{ padding: '12px' }}>{booking.guest_info}</td>
                                        <td style={{ padding: '12px' }}>{booking.start_date}</td>
                                        <td style={{ padding: '12px' }}>{booking.end_date}</td>
                                        <td style={{ padding: '12px' }}>{booking.status}</td>
                                        <td style={{ padding: '12px' }}>
                                            <Button
                                                variant="secondary"
                                                style={{ fontSize: '12px', padding: '6px 12px', backgroundColor: 'var(--md-sys-color-error-container)', color: 'var(--md-sys-color-on-error-container)' }}
                                                onClick={() => handleDeleteBooking(booking.id)}
                                            >
                                                Padam
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default AdminDashboard;
