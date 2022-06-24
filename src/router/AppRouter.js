import React, { Component, Fragment } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutPage from '../pages/AboutPage';
import AllCoursePage from '../pages/AllCoursePage';
import AllServicePage from '../pages/AllServicePage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import PortfolioPage from '../pages/PortfolioPage';
import RefundPage from '../pages/RefundPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import CourseDetailPage from '../pages/CourseDetailPage';

export default class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/service" element={<AllServicePage />} />
                    <Route path="/course" element={<AllCoursePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/refund" element={<RefundPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/projectdetails" element={<ProjectDetailPage />} />
                    <Route path="/coursedetails" element={<CourseDetailPage />} />
                </Routes>
            </Fragment>
        )
    }
}
