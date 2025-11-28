import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import { ms } from 'date-fns/locale';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { supabase } from '../supabaseClient';

const CalendarPage = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [bookedDates, setBookedDates] = useState([]);

    useEffect(() => {
        fetchBookings();
    }, [currentMonth]);

    const fetchBookings = async () => {
        const start = startOfMonth(currentMonth).toISOString();
        const end = endOfMonth(currentMonth).toISOString();

        const { data, error } = await supabase
            .from('bookings')
            .select('start_date, end_date')
            .eq('status', 'booked');

        if (error) {
            console.error('Error fetching bookings:', error);
        } else {
            const dates = [];
            data.forEach(booking => {
                const interval = eachDayOfInterval({
                    start: new Date(booking.start_date),
                    end: new Date(booking.end_date)
                });
                dates.push(...interval);
            });
            setBookedDates(dates);
        }
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <Button variant="secondary" onClick={prevMonth} style={{ padding: '8px 16px' }} aria-label="Bulan Terdahulu"><FaChevronLeft /></Button>
                <h2 className="text-title-large" style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>
                    {format(currentMonth, 'MMMM yyyy', { locale: ms })}
                </h2>
                <Button variant="secondary" onClick={nextMonth} style={{ padding: '8px 16px' }} aria-label="Bulan Seterusnya"><FaChevronRight /></Button>
            </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const startDate = startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div key={i} style={{ textAlign: 'center', fontWeight: 'bold', padding: '8px', fontSize: '0.9rem' }}>
                    {format(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i), 'EEE', { locale: ms })}
                </div>
            );
        }
        return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '8px' }}>{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;

                const isBooked = bookedDates.some(bookedDate => isSameDay(cloneDay, bookedDate));
                const isCurrentMonth = isSameMonth(cloneDay, monthStart);

                days.push(
                    <div
                        key={day.toString()}
                        style={{
                            padding: '12px 4px',
                            textAlign: 'center',
                            backgroundColor: isBooked
                                ? 'var(--md-sys-color-error-container)'
                                : isCurrentMonth ? '#C8E6C9' /* Green 100 - More visible */ : 'transparent',
                            color: isBooked
                                ? 'var(--md-sys-color-on-error-container)'
                                : isCurrentMonth ? '#1B5E20' /* Dark Green text */ : 'var(--md-sys-color-outline)',
                            borderRadius: '8px',
                            margin: '1px',
                            opacity: isCurrentMonth ? 1 : 0.5,
                            position: 'relative',
                            fontSize: '0.9rem',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <span>{formattedDate}</span>
                        {isBooked && <div style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', marginTop: '2px' }}></div>}
                    </div>
                );
                day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1);
            }
            rows.push(
                <div key={day.toString()} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };

    return (
        <div className="container" style={{ paddingBottom: '32px', paddingTop: '20px' }}>
            <h1 className="text-headline-medium" style={{ textAlign: 'center', marginBottom: '32px' }}>Kekosongan</h1>
            <Card style={{ padding: '12px' }}>
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </Card>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <p className="text-body-large" style={{ marginBottom: '16px' }}>
                    Berminat dengan tarikh tertentu? Hubungi kami untuk tempahan!
                </p>
                <Button variant="primary" onClick={() => window.location.href = 'mailto:host@homestay.com'}>
                    Hubungi Tuan Rumah
                </Button>
            </div>
        </div>
    );
};

export default CalendarPage;
