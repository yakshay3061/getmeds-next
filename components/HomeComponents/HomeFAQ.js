'use client'

import { useState } from 'react';
import './HomeFAQ.css'



export default function HomeFAQ() {

    const [show1, setShow1] = useState(false);

  

    const handleToggle1 = () => {
      setShow1((prev) => !prev);
    };
  
    const [show2, setShow2] = useState(false);
  
    const handleToggle2 = () => {
      setShow2((prev) => !prev);
    };
  
    const [show3, setShow3] = useState(false);
  
    const handleToggle3 = () => {
      setShow3((prev) => !prev);
    };
  
    const [show4, setShow4] = useState(false);
  
    const handleToggle4 = () => {
      setShow4((prev) => !prev);
    };
  
    const [show5, setShow5] = useState(false);
  
    const handleToggle5 = () => {
      setShow5((prev) => !prev);
    };
  
    const [show6, setShow6] = useState(false);
  
    const handleToggle6 = () => {
      setShow6((prev) => !prev);
    };
   
    return (
      <div className="faq-container">
        <p className="faq-heading">Frequently Asked Questions</p>
        <div className="faq-content">
          <div className={`faq-card-item  ${show1 ? "active" : ""}`}>
            <div className="ques-and-icon">
              {!show1 ? <svg className="faq-icon" onClick={handleToggle1}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle1} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
            
              {/* <img
                className="faq-icon"
                onClick={handleToggle1}
                src={icon1}
                alt="faq-icon"
              /> */}
              <p className="faq-question">
                How many days to deliver the medicine?
              </p>
            </div>
  
            {show1 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <div className={`faq-card-item  ${show2 ? "active" : ""}`}>
            <div className="ques-and-icon">
              
            {!show2 ? <svg className="faq-icon" onClick={handleToggle2}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle2} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
              <p className="faq-question">When will i receive my order?</p>
            </div>
  
            {show2 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <div className={`faq-card-item  ${show3 ? "active" : ""}`}>
            <div className="ques-and-icon">
            {!show3 ? <svg className="faq-icon" onClick={handleToggle3}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle3} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
              <p className="faq-question">How to place an order?</p>
            </div>
  
            {show3 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <div className={`faq-card-item  ${show4 ? "active" : ""}`}>
            <div className="ques-and-icon">
            {!show4 ? <svg className="faq-icon" onClick={handleToggle4}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle4} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
              <p className="faq-question">
                Whom should I contact if I have any payment related issues?
              </p>
            </div>
  
            {show4 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <div className={`faq-card-item  ${show5 ? "active" : ""}`}>
            <div className="ques-and-icon">
            {!show5 ? <svg className="faq-icon" onClick={handleToggle5}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle5} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
              <p className="faq-question">
                Do you have Cash on delivery (COD) option available?
              </p>
            </div>
  
            {show5 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <div className={`faq-card-item  ${show6 ? "active" : ""}`}>
            <div className="ques-and-icon">
            {!show6 ? <svg className="faq-icon" onClick={handleToggle6}
                 xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
    <path  d="M11.4562 11.1853C11.0812 11.5598 10.5728 11.7702 10.0428 11.7702C9.51283 11.7702 9.0045 11.5598 8.6295 11.1853L1.0855 3.64397C0.710487 3.26877 0.499875 2.75997 0.5 2.2295C0.500125 1.69902 0.710976 1.19032 1.08617 0.815301C1.46136 0.440285 1.97016 0.229672 2.50064 0.229797C3.03112 0.229922 3.53982 0.440774 3.91484 0.815967L10.0428 6.94397L16.1708 0.815967C16.5479 0.451469 17.053 0.249639 17.5774 0.253947C18.1018 0.258255 18.6035 0.468356 18.9745 0.838999C19.3455 1.20964 19.5561 1.71117 19.5609 2.23556C19.5657 2.75996 19.3643 3.26526 19.0002 3.64263L11.4575 11.1866L11.4562 11.1853Z" fill="#1D9FDA"/>
  </svg> : <svg className="faq-icon" onClick={handleToggle6} xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path  d="M8.65389 0.801498C9.02889 0.426963 9.53722 0.216591 10.0672 0.216591C10.5972 0.216591 11.1056 0.426963 11.4806 0.801498L19.0246 8.34283C19.2102 8.52861 19.3575 8.74914 19.458 8.99184C19.5584 9.23453 19.6101 9.49464 19.6101 9.7573C19.61 10.02 19.5582 10.2801 19.4576 10.5227C19.357 10.7653 19.2097 10.9858 19.0239 11.1715C18.8381 11.3572 18.6176 11.5045 18.3749 11.6049C18.1322 11.7054 17.8721 11.7571 17.6094 11.757C17.3468 11.7569 17.0867 11.7051 16.844 11.6046C16.6014 11.504 16.3809 11.3566 16.1952 11.1708L10.0672 5.04416L3.93922 11.1722C3.75482 11.3633 3.5342 11.5157 3.29024 11.6207C3.04629 11.7256 2.78387 11.7809 2.51832 11.7833C2.25276 11.7858 1.98938 11.7353 1.74354 11.6348C1.4977 11.5344 1.27433 11.386 1.08645 11.1983C0.898581 11.0106 0.74997 10.7874 0.649292 10.5416C0.548614 10.2959 0.497886 10.0325 0.500067 9.76698C0.502249 9.50142 0.557297 9.23896 0.661998 8.9949C0.7667 8.75084 0.918958 8.53008 1.10989 8.3455L8.65389 0.801498Z" fill="#1D9FDA"/>
  </svg>}
              <p className="faq-question">What are payment modes available?</p>
            </div>
  
            {show6 && (
              <div className="faq-answer">
                <p className="answer-heading">
                  To process your order fast, we require the following pieces of
                  information from you:
                </p>
  
                <li>Your billing/shipping address.</li>
                <li>
                  Your prescription (needed for the order of Prescribed
                  medicines).
                </li>
                <li>Your payment method.</li>
              </div>
            )}
          </div>
          <p className="got-another-ques">Got any other question?</p>
          <p className="faq-contact-link">Contact us</p>
        </div>
      </div>
    );
}
