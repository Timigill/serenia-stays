'use client';

import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookRoomModal({ show, handleClose }) {
  const [showFullForm, setShowFullForm] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // 🔁 Step 1: Handle form submission (availability + full booking)
  const onSubmit = async (data) => {
    if (!showFullForm) {
      // 📡 Check availability via API
      try {
        const formattedData = {
          ...data,
          checkIn: data.checkIn?.toISOString(),
          checkOut: data.checkOut?.toISOString(),
        };

const response = await fetch('/api/check-availability', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formattedData),
});
const result = await response.json();

        if (result.available) {
          setShowFullForm(true); // 🟢 Show the remaining form
        } else {
          alert(result.message || 'Room not available.');
        }
      } catch (err) {
        console.error(err);
        alert('Something went wrong. Please try again.');
      }
    } else {
      // ✅ Final Booking Form Submission
      alert('Booking submitted successfully!');
      handleClose();
      setShowFullForm(false);
      reset();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Body className="p-5">
        <h4 className="text-center mb-4 fw-bold">
          {showFullForm ? 'Complete Your Booking' : 'Check Availability'}
        </h4>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* Check In / Check Out */}
          <Row className="mb-3">
            <Col md={6}>
              <Controller
                name="checkIn"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Check in date"
                    className={`form-control ${errors.checkIn ? 'is-invalid' : ''}`}
                    selected={field.value}
                    onChange={field.onChange}
                    dateFormat="MMMM d, yyyy"
                  />
                )}
              />
              {errors.checkIn && <small className="text-danger">Required</small>}
            </Col>

            <Col md={6}>    
              <Controller
                name="checkOut"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    placeholderText="Check out date"
                    className={`form-control ${errors.checkOut ? 'is-invalid' : ''}`}
                    selected={field.value}
                    onChange={field.onChange}
                    dateFormat="MMMM d, yyyy"
                  />
                )}
              />
              {errors.checkOut && <small className="text-danger">Required</small>}
            </Col>
          </Row>

          {/* Adults / Children */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Select {...register('adults', { required: true })}>
                <option value="">Adult</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3+">3+</option>
              </Form.Select>
              {errors.adults && <small className="text-danger">Required</small>}
            </Col>
            <Col md={6}>
              <Form.Select {...register('children', { required: true })}>
                <option value="">Children</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2+">2+</option>
              </Form.Select>
              {errors.children && <small className="text-danger">Required</small>}
            </Col>
          </Row>

          {/* Room Type */}
          <Form.Group className="mb-4">
            <Form.Select {...register('roomType', { required: true })}>
              <option value="">Room type</option>
              <option value="luxury">Luxury Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="signature">Signature Room</option>
              <option value="couple">Couple Room</option>
            </Form.Select>
            {errors.roomType && <small className="text-danger">Required</small>}
          </Form.Group>

          {/* Full Booking Form (after availability) */}
          {showFullForm && (
            <>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  {...register('fullName', { required: true })}
                  className={errors.fullName ? 'is-invalid' : ''}
                />
                {errors.fullName && <small className="text-danger">Full name is required</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={errors.email ? 'is-invalid' : ''}
                />
                {errors.email && <small className="text-danger">{errors.email.message}</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10,14}$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className={errors.phone ? 'is-invalid' : ''}
                />
                {errors.phone && <small className="text-danger">{errors.phone.message}</small>}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  placeholder="Special Requests (Optional)"
                  rows={3}
                  {...register('specialRequests')}
                />
              </Form.Group>
            </>
          )}

          <Button type="submit" className="w-100 bg-primary border-0 py-2 fw-semibold">
            {showFullForm ? 'Book Now' : 'Check Availability'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
