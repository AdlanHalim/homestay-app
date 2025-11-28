import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { supabase } from '../supabaseClient';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert('Ralat log masuk: ' + error.message);
        } else {
            navigate('/admin/dashboard');
        }
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '60vh',
            padding: '20px'
        }}>
            <Card style={{ maxWidth: '400px', width: '100%' }}>
                <h1 className="text-headline-small" style={{ textAlign: 'center', marginBottom: '24px' }}>Log Masuk Admin</h1>
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>Emel</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid var(--md-sys-color-outline)',
                                backgroundColor: 'var(--md-sys-color-surface)',
                                color: 'var(--md-sys-color-on-surface)'
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px' }}>Kata Laluan</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid var(--md-sys-color-outline)',
                                backgroundColor: 'var(--md-sys-color-surface)',
                                color: 'var(--md-sys-color-on-surface)'
                            }}
                            required
                        />
                    </div>
                    <Button type="submit" variant="primary" style={{ marginTop: '8px' }}>Log Masuk</Button>
                </form>
            </Card>
        </div>
    );
};

export default AdminLogin;
