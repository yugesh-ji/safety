//@refresh
"use client";
import React, { useState, useEffect } from 'react';
import HomeTwoMain from "@/components/home-two/HomeTwoMain";
import Wrapper from "@/layout/DefaultWrapper";
import PopupModal from '@/components/common/popup-modal/PopupModal';
import '@/components/common/popup-modal/PopupModal.css';
import courses_data from '@/data/courses-data';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');

  useEffect(() => {
    setModalOpen(true);
    if (courses_data.length > 0) {
      setCourse(courses_data[0].title);
    }
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log({ name, phone, course });
    alert('Inquiry submitted!');
    closeModal();
  };

  return (
    <>
      <Wrapper>
        <main>
          <HomeTwoMain />
        </main>
      </Wrapper>
      <PopupModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Course Inquiry</h2>
        <form onSubmit={handleSubmit} className="inquiry-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            {courses_data.map((courseItem) => (
              <option key={courseItem.id} value={courseItem.title}>
                {courseItem.title}
              </option>
            ))}
          </select>
          <button type="submit">Submit Inquiry</button>
        </form>
      </PopupModal>
    </>
  );
}

export default Home;