import Head from 'next/head'
import React, { useState, useCallback, useEffect } from 'react';

import Card from '../components/Card';
import Pagination from '../components/Pagination';

import { toast } from 'react-toastify';

import styles from '../styles/pages/Dashboard.module.scss';

import { api } from '../services/api';

type Course = {
    id: number;
    title: string;
    stars: 1 | 2 | 3 | 4 | 5;
    lessons: number;
    image: string;
  };

const Dashboard: React.FC = () => {
    const perPage = 6;

    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [courses, setCourses] = useState<Course[]>([]);
    const [paginatedCourses, setPaginatedCourses] = useState<Course[]>([]);

    const toggleIsOpenMenuMobile = useCallback(() => {
        setIsOpenMenuMobile(state => !state);
      }, []);

      useEffect(() => {
        async function loadData() {
          try {
            const response = await api.get('/courses');
    
            setCourses(response.data);
          } catch {
            toast.error('There was an error loading the course list.');
          } finally {
            setLoading(false);
          }
        }
    
        loadData();
      }, []);
    
      useEffect(() => {
        const startPaginate = (Number(currentPage) - 1) * perPage;
    
        const endPaginate = startPaginate + perPage;
    
        setPaginatedCourses(courses.slice(startPaginate, endPaginate));
      }, [courses, perPage, currentPage]);    
 
    return (
        <div className={styles.container}>
            <Head>
                <title>Eduick | Dashboard</title>
            </Head>

            <div className={styles.content}>
                <header>
                    <div className={styles.background}></div>

                    <div className={styles.headerContent}>
                        <div>
                            <img src="/logo.svg" alt="Eduick Logo" />

                            <nav>
                                <a href="/">My Classes</a>
                            </nav>
                        </div>

                        <div>
                            <button className={styles.buttonChangeMode}>
                                Change to teacher mode
                            </button>

                            <button className={styles.mobileMenuButton} onClick={toggleIsOpenMenuMobile}>
                                { isOpenMenuMobile ? (
                                    <img src="/chevron_up.svg" alt="Up" />
                                ) : (
                                    <img src="/chevron_down.svg" alt="Down" />
                                )}

                                { isOpenMenuMobile &&
                                <div className={styles.containerDropDownMenu}>
                                    <button className={styles.buttonDropDownMenu}>
                                        Change to teacher mode
                                        <img src="/arrow-right.svg" alt="Go to" />
                                    </button>
                                </div>
                                }
                            </button>
                            

                            <button className={styles.profileArea}>
                                <img src="https://github.com/filipefdm.png" alt="Profile" />
                            </button>
                        </div>
                    </div>
                </header>

                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionImage}>
                            <img src="/shape-banner.svg" alt="Hello Student." />
                        </div>

                        <div>
                            <div>
                                <h2>
                                    Hello <strong>Student</strong>
                                    <span>.</span>
                                </h2>
                            <p>
                                Whether you are a student trying to find your ideal private
                                language teachers/tutors
                            </p>
                            </div>

                            <img
                            className="image-banner"
                            src="/illustration-banner.svg"
                            alt="Hello Student."
                            />
                        </div>
                    </div>
                </section>

                {loading ? (
                    <main className={styles.containerLoading}>
                        Loading...
                    </main>
                    ) : (
                    <main className={styles.cardsGrid}>
                        <div>
                            {paginatedCourses.map(course => (
                            <Card key={course.id} course={course} />
                            ))}
                        </div>  
                    </main>
                )}

                <div className={styles.containerPagination}>
                    <Pagination
                    perPage={perPage}
                    total={courses.length}
                    onChangePage={page => setCurrentPage(page)}
                    />
                </div>

                <footer className={styles.footer}>
                    <div>
                        <p>
                            Copyright © 2021 <strong>Eduick</strong>. Todos os direitos
                            reservados.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Dashboard;