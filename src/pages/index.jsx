import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Modal from '../components/Modal';
import RadioGroup from '../components/RadioGroup';

import styles from '../styles/pages/Home.module.scss';

export default function Home() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const router = useRouter();

    const [visibleMobile, setVisibleMobile] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);

    return (
      <div className={styles.containerPage}>
        <Head>
          <title>Eduick | Home</title>
        </Head>

        <div className={styles.headShapeBg}></div>

        <div className={styles.contentPage}>
          <header>
            <div>
              <div>
                <button className={styles.hamburguerButton}
                onClick={() => setVisibleMobile(true)}>
                  <img src="/hamburger.svg" alt="Menu" />
                </button>
                { visibleMobile ? (
                <div>
                  <div className={styles.hamburgerSection}>
                    <header>
                      <img src="/logo.svg" alt="Eduick Logo" />
          
                      <button type="button" onClick={() => setVisibleMobile(false)}>
                        <img src="/close.svg" alt="Close Button" />
                      </button>
                    </header>
        
                    <div>
                      <nav>
                        <ul>
                          <li>
                            <a href="/">How it works</a>
                          </li>
                          <li>
                            <a href="/">About Us</a>
                          </li>
                        </ul>
                        <button onClick={() => setisModalVisible(true)}>
                        Get started
                        </button>
                      </nav>
                    </div>
                  </div>
                </div> ) : null}

                <img src="/logo.svg" alt="Eduick Logo" />
              </div>

              <nav>
                <ul>
                  <li>
                    <a href="/">How it works</a>
                  </li>
                  <li>
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </nav>
            </div>

            <button onClick={() => setisModalVisible(true)}>
              Get started
            </button>
            {isModalVisible ? ( 
            <Modal onClose={() => setisModalVisible(false)}>
              <div className={styles.modalInfo}>
                <h1>
                  Get started
                  <br />
                  <span>Just Login</span>
                </h1>

                <form className={styles.formInfo}>
                  <label>Username: </label>
                  <input name="username" type="text" label="Username" />
                  
                  <div className={styles.wrapperInput}>
                    <label>Password: </label>
                    <i className={styles.eyeIcon} onClick={togglePasswordVisiblity}>{passwordShown ? (
                        <img
                          src="/icon-eye-show.svg"
                          alt="Password Show"
                          data-testid="password-visible"
                        />
                      ) : (
                        <img src="/icon-eye.svg" alt="Password Hidden" />
                      )}</i>
                    <input 
                      className={styles.inputPassword}
                      type={passwordShown ? "text" : "password"}
                      name="password"
                    />
                      
                  </div>

                  <button type="button" onClick={() => router.push('/dashboard')}>
                    Login
                  </button>
                </form>
              </div>
            </Modal> 
            ) : null}
          </header>

          <div>
            <div className={styles.girlWritingImage}>
              <img src="/head-shape-image.png" alt="Girl writing" />
            </div>

            <section className={styles.sectionContent}>
              <div>
                <h1>
                  Find your
                  <br />
                  <span>Best Teacher</span>
                </h1>

                <p>
                  Whether you are a student trying to find your ideal private
                  language teachers/tutors or a teacher trying to find great
                  students for your customised private lessons!
                </p>

                <form>
                  <input placeholder="Type here what are you looking for" />

                  <div>
                    <RadioGroup />
                    <button>Search</button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
};
