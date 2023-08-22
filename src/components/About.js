import "./About.css";
import { Children } from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid About" style={{ paddingTop: "18%" }}>
        <div className="row mx-auto justify-content-center">
          <div className="col-md-6 pe-5 pb-5 text-lg-start introText">
            <h1 className="mb-3 fs-1 ">About the SJSU CS Club</h1>
            <p className="fs-4">
              The purpose of the Computer Science Club is to create a space for
              students to connect and grow their technical skills outside of the
              classroom.
              <br />
              <br /> Whether you just want to know what coding is, or need help
              getting an internship, everyone is welcome in the CS Club!
            </p>
          </div>
          <div className="col-md-3 ps-4">
            <img
              src="Club_Page_Image.png"
              class="main-image"
              alt="club-activities"
            />
          </div>
        </div>

        <div className="container-fluid mx-auto second-half">
          <div className="mx-auto" style={{ width: "65%" }}>
            <h1 className="text-center fs-1">How Can I Get Involved?</h1>
            <p className="text-center fs-5 ">
              Students clubs and organizations allow students to socialize,
              build community, gain skills, and develop leadership. They do so
              via activities such as providing personal and professional
              development workshops, giving students opportunities to put
              impressive projects on their résumés, conducting mock interviews,
              hosting company tours, and connecting students with more
              professionals in the industry.
            </p>
            <p className="text-center fs-5 ">
              Here are the student organizations in the Computer Science
              Department at San Jose State University:
            </p>
          </div>

          <div
            className="container-xl mx-auto text-lg-start"
            style={{ paddingTop: "8%" }}
          >
            <Involved
              img_src="GWC.png"
              heading="Girls Who Code College Loop "
              body="The Girls Who Code College Loop club here at SJSU is a safe space for women in STEM
           (and particularly those in tech related fields).
            We want women to have a place where they can network and create connections that go beyond
             the workplace so they have a community of others on who they can rely on.
              That being said, we do accept all people regardless of gender identity,
           because allies are just as important when it comes to creating a safe space where everyone feels welcome."
              color="#93C3DE"
            >
              <a href="#" className="social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="54"
                  fill="none"
                  viewBox="0 0 40 44"
                >
                  <path
                    fill="#000"
                    d="M35.1854 0C37.782 0 39.8763 2.04865 40 4.45946V43.2432L35.0561 39.1477L32.3413 36.7369L29.379 34.218L30.6164 38.191H4.69089C2.10167 38.191 0 36.2721 0 33.7297V4.46847C0 2.05766 2.10536 0.00540541 4.70012 0.00540541H35.1724L35.1854 0ZM23.8866 10.2396H23.8312L23.4581 10.6C27.2866 11.6811 29.1389 13.3694 29.1389 13.3694C26.6716 12.1658 24.448 11.564 22.2245 11.3207C20.6178 11.0775 19.011 11.2054 17.6536 11.3207H17.2843C16.4163 11.3207 14.5695 11.6811 12.0947 12.645C11.2323 13.0108 10.7373 13.2505 10.7373 13.2505C10.7373 13.2505 12.5878 11.445 16.6656 10.4811L16.4163 10.2378C16.4163 10.2378 13.3284 10.1225 9.99492 12.5261C9.99492 12.5261 6.66143 18.191 6.66143 25.1748C6.66143 25.1748 8.50824 28.3099 13.574 28.4288C13.574 28.4288 14.3128 27.4685 15.0607 26.6234C12.2166 25.7802 11.1085 24.0937 11.1085 24.0937C11.1085 24.0937 11.356 24.2126 11.7272 24.4541H11.838C11.8934 24.4541 11.9193 24.4811 11.9488 24.5081V24.5189C11.9784 24.5477 12.0042 24.573 12.0597 24.573C12.6691 24.818 13.2785 25.0595 13.7772 25.2937C14.8436 25.7391 15.959 26.0631 17.1014 26.2595C18.819 26.5027 20.7877 26.6198 23.0297 26.2595C24.1378 26.0162 25.2459 25.7784 26.3539 25.2955C27.0742 24.9351 27.9607 24.5748 28.9339 23.9676C28.9339 23.9676 27.8258 25.6541 24.8617 26.4973C25.4712 27.3369 26.3299 28.2991 26.3299 28.2991C31.3976 28.191 33.3663 25.0559 33.4771 25.1892C33.4771 18.2162 30.1251 12.5405 30.1251 12.5405C27.1056 10.3532 24.28 10.2703 23.7813 10.2703L23.8848 10.2342L23.8866 10.2396ZM24.1969 18.191C25.4952 18.191 26.5423 19.2721 26.5423 20.5964C26.5423 21.9297 25.4896 23.0108 24.1969 23.0108C22.9041 23.0108 21.8514 21.9297 21.8514 20.6072C21.8551 19.2739 22.9096 18.1964 24.1969 18.1964V18.191ZM15.8068 18.191C17.0996 18.191 18.1449 19.2721 18.1449 20.5964C18.1449 21.9297 17.0922 23.0108 15.7994 23.0108C14.5067 23.0108 13.454 21.9297 13.454 20.6072C13.454 19.2739 14.5067 18.1964 15.7994 18.1964L15.8068 18.191Z"
                  />
                </svg>
              </a>
              <h2 className="fs-4 mt-2 mb-2">Feel free to check us out!</h2>
              <a
                href="https://linktr.ee/gwc_sjsu"
                target="_blank"
                role="button"
                class="btn"
                style={{ backgroundColor: "#93C3DE", color: "#fff" }}
              >
                Learn More
              </a>
            </Involved>

            <Involved
              img_src="Hoplite-logo.png"
              heading="Hoplite"
              body=" 
          The purpose of Hoplite is to help students master the foundational data structures and algorithms in order to excel in technical interviews and land
           competitive offers. We also strive to foster a sense of community and help students build a strong network with motivated peers. We host weekly/bi-weekly interview prep sessions,
            resume workshops, collaborations with companies, alumni panels, etc,. to help you get into your dream company!"
              color="rgb(80, 80, 243)"
            >
              <a
                href="https://discord.com/invite/ruqGqcXafw"
                className="social-icons"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="54"
                  fill="none"
                  viewBox="0 0 40 44"
                >
                  <path
                    fill="#000"
                    d="M35.1854 0C37.782 0 39.8763 2.04865 40 4.45946V43.2432L35.0561 39.1477L32.3413 36.7369L29.379 34.218L30.6164 38.191H4.69089C2.10167 38.191 0 36.2721 0 33.7297V4.46847C0 2.05766 2.10536 0.00540541 4.70012 0.00540541H35.1724L35.1854 0ZM23.8866 10.2396H23.8312L23.4581 10.6C27.2866 11.6811 29.1389 13.3694 29.1389 13.3694C26.6716 12.1658 24.448 11.564 22.2245 11.3207C20.6178 11.0775 19.011 11.2054 17.6536 11.3207H17.2843C16.4163 11.3207 14.5695 11.6811 12.0947 12.645C11.2323 13.0108 10.7373 13.2505 10.7373 13.2505C10.7373 13.2505 12.5878 11.445 16.6656 10.4811L16.4163 10.2378C16.4163 10.2378 13.3284 10.1225 9.99492 12.5261C9.99492 12.5261 6.66143 18.191 6.66143 25.1748C6.66143 25.1748 8.50824 28.3099 13.574 28.4288C13.574 28.4288 14.3128 27.4685 15.0607 26.6234C12.2166 25.7802 11.1085 24.0937 11.1085 24.0937C11.1085 24.0937 11.356 24.2126 11.7272 24.4541H11.838C11.8934 24.4541 11.9193 24.4811 11.9488 24.5081V24.5189C11.9784 24.5477 12.0042 24.573 12.0597 24.573C12.6691 24.818 13.2785 25.0595 13.7772 25.2937C14.8436 25.7391 15.959 26.0631 17.1014 26.2595C18.819 26.5027 20.7877 26.6198 23.0297 26.2595C24.1378 26.0162 25.2459 25.7784 26.3539 25.2955C27.0742 24.9351 27.9607 24.5748 28.9339 23.9676C28.9339 23.9676 27.8258 25.6541 24.8617 26.4973C25.4712 27.3369 26.3299 28.2991 26.3299 28.2991C31.3976 28.191 33.3663 25.0559 33.4771 25.1892C33.4771 18.2162 30.1251 12.5405 30.1251 12.5405C27.1056 10.3532 24.28 10.2703 23.7813 10.2703L23.8848 10.2342L23.8866 10.2396ZM24.1969 18.191C25.4952 18.191 26.5423 19.2721 26.5423 20.5964C26.5423 21.9297 25.4896 23.0108 24.1969 23.0108C22.9041 23.0108 21.8514 21.9297 21.8514 20.6072C21.8551 19.2739 22.9096 18.1964 24.1969 18.1964V18.191ZM15.8068 18.191C17.0996 18.191 18.1449 19.2721 18.1449 20.5964C18.1449 21.9297 17.0922 23.0108 15.7994 23.0108C14.5067 23.0108 13.454 21.9297 13.454 20.6072C13.454 19.2739 14.5067 18.1964 15.7994 18.1964L15.8068 18.191Z"
                  />
                </svg>
              </a>
            </Involved>

            <Involved
              img_src="Bioinformatics_Club_Logo.png"
              heading="Bioinformatics Club"
              body=" The Bioinformatics Club provides a community for students interested in bioinformatics to learn more about
           the field and dive in deeper. Through bi-weekly informational talks, hands-on technical workshops, and networking events with industry professionals, we aim to foster growth and collaboration in students to create meaningful connections.
           All students are welcome to join and learn more about the opportunities that await within bioinformatics!"
              color="rgb(234, 138, 69)"
            />
            <Involved
              img_src="SWE_SJSU_Logo.jpeg"
              heading="Society of Women Engineers:"
              body=" At SWE SJSU, we are dedicated to empowering women to achieve their fullest potential as engineers and leaders.
           We offer three categories of events: professional development, community building, and STEM outreach.
            All years, genders, and majors are welcome to join, as long as you support our mission!"
              color="rgb(217, 185, 68)"
            >
              <a
                href="https://discord.com/invite/ruqGqcXafw"
                className="social-icons"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="54"
                  fill="none"
                  viewBox="0 0 40 44"
                >
                  <path
                    fill="#000"
                    d="M35.1854 0C37.782 0 39.8763 2.04865 40 4.45946V43.2432L35.0561 39.1477L32.3413 36.7369L29.379 34.218L30.6164 38.191H4.69089C2.10167 38.191 0 36.2721 0 33.7297V4.46847C0 2.05766 2.10536 0.00540541 4.70012 0.00540541H35.1724L35.1854 0ZM23.8866 10.2396H23.8312L23.4581 10.6C27.2866 11.6811 29.1389 13.3694 29.1389 13.3694C26.6716 12.1658 24.448 11.564 22.2245 11.3207C20.6178 11.0775 19.011 11.2054 17.6536 11.3207H17.2843C16.4163 11.3207 14.5695 11.6811 12.0947 12.645C11.2323 13.0108 10.7373 13.2505 10.7373 13.2505C10.7373 13.2505 12.5878 11.445 16.6656 10.4811L16.4163 10.2378C16.4163 10.2378 13.3284 10.1225 9.99492 12.5261C9.99492 12.5261 6.66143 18.191 6.66143 25.1748C6.66143 25.1748 8.50824 28.3099 13.574 28.4288C13.574 28.4288 14.3128 27.4685 15.0607 26.6234C12.2166 25.7802 11.1085 24.0937 11.1085 24.0937C11.1085 24.0937 11.356 24.2126 11.7272 24.4541H11.838C11.8934 24.4541 11.9193 24.4811 11.9488 24.5081V24.5189C11.9784 24.5477 12.0042 24.573 12.0597 24.573C12.6691 24.818 13.2785 25.0595 13.7772 25.2937C14.8436 25.7391 15.959 26.0631 17.1014 26.2595C18.819 26.5027 20.7877 26.6198 23.0297 26.2595C24.1378 26.0162 25.2459 25.7784 26.3539 25.2955C27.0742 24.9351 27.9607 24.5748 28.9339 23.9676C28.9339 23.9676 27.8258 25.6541 24.8617 26.4973C25.4712 27.3369 26.3299 28.2991 26.3299 28.2991C31.3976 28.191 33.3663 25.0559 33.4771 25.1892C33.4771 18.2162 30.1251 12.5405 30.1251 12.5405C27.1056 10.3532 24.28 10.2703 23.7813 10.2703L23.8848 10.2342L23.8866 10.2396ZM24.1969 18.191C25.4952 18.191 26.5423 19.2721 26.5423 20.5964C26.5423 21.9297 25.4896 23.0108 24.1969 23.0108C22.9041 23.0108 21.8514 21.9297 21.8514 20.6072C21.8551 19.2739 22.9096 18.1964 24.1969 18.1964V18.191ZM15.8068 18.191C17.0996 18.191 18.1449 19.2721 18.1449 20.5964C18.1449 21.9297 17.0922 23.0108 15.7994 23.0108C14.5067 23.0108 13.454 21.9297 13.454 20.6072C13.454 19.2739 14.5067 18.1964 15.7994 18.1964L15.8068 18.191Z"
                  />
                </svg>
              </a>
              <a href="#" className="ps-4 social-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#000"
                    d="M20.0045 9.7445C14.3291 9.7445 9.75125 14.3233 9.75125 20C9.75125 25.6767 14.3291 30.2555 20.0045 30.2555C25.6799 30.2555 30.2577 25.6767 30.2577 20C30.2577 14.3233 25.6799 9.7445 20.0045 9.7445ZM20.0045 26.6674C16.3369 26.6674 13.3385 23.6773 13.3385 20C13.3385 16.3227 16.3279 13.3326 20.0045 13.3326C23.681 13.3326 26.6704 16.3227 26.6704 20C26.6704 23.6773 23.6721 26.6674 20.0045 26.6674ZM33.0686 9.325C33.0686 10.6549 31.9978 11.7171 30.6771 11.7171C29.3475 11.7171 28.2856 10.646 28.2856 9.325C28.2856 8.00402 29.3564 6.93295 30.6771 6.93295C31.9978 6.93295 33.0686 8.00402 33.0686 9.325ZM39.8595 11.7528C39.7078 8.54848 38.976 5.71014 36.6291 3.37164C34.2911 1.03314 31.4534 0.301238 28.2499 0.140578C24.9481 -0.0468593 15.0519 -0.0468593 11.7501 0.140578C8.55549 0.292313 5.71779 1.02421 3.37089 3.36271C1.02398 5.70122 0.301171 8.53955 0.140547 11.7438C-0.0468489 15.0463 -0.0468489 24.9448 0.140547 28.2472C0.292248 31.4515 1.02398 34.2899 3.37089 36.6284C5.71779 38.9669 8.54657 39.6988 11.7501 39.8594C15.0519 40.0469 24.9481 40.0469 28.2499 39.8594C31.4534 39.7077 34.2911 38.9758 36.6291 36.6284C38.9671 34.2899 39.6988 31.4515 39.8595 28.2472C40.0468 24.9448 40.0468 15.0552 39.8595 11.7528ZM35.594 31.7907C34.8979 33.5401 33.5505 34.8879 31.7925 35.593C29.1601 36.6373 22.9136 36.3963 20.0045 36.3963C17.0954 36.3963 10.8399 36.6284 8.2164 35.593C6.46737 34.8968 5.11991 33.549 4.41495 31.7907C3.37089 29.1576 3.61182 22.9097 3.61182 20C3.61182 17.0903 3.37981 10.8334 4.41495 8.2093C5.11099 6.45989 6.45845 5.11213 8.2164 4.40701C10.8489 3.36271 17.0954 3.6037 20.0045 3.6037C22.9136 3.6037 29.169 3.37164 31.7925 4.40701C33.5416 5.1032 34.889 6.45096 35.594 8.2093C36.638 10.8424 36.3971 17.0903 36.3971 20C36.3971 22.9097 36.638 29.1666 35.594 31.7907Z"
                  />
                </svg>
              </a>
            </Involved>
          </div>

          <div className="mx-auto" style={{ width: "50%" }}>
            <h1 className=" mx-auto text-center">Don't Wanna Miss Out?</h1>
            <p className=" mx-auto mt-4 fs-5 text-center">
              Fear not! There's multiple mediums through which you can stay
              up-to-date with the latest news and events so that you never miss
              a beat at the computer science club.
            </p>
            <button type="button" class="btn btn-dark">
              Show Me
            </button>
          </div>

          <div
            className="container overflow-hidden"
            style={{ paddingTop: "8%" }}
          >
            <h1 className=" mx-auto text-center pb-5">Meet the Board</h1>
            <div className="row gy-4 justify-content-center align-items-center pb-5 gap-5">
              <Card
                position="Event Chair"
                img_src="galitbolotin.png"
                name="Galit Bolotin"
              />
              <Card
                position="Vice President"
                img_src="shirleyli.png"
                name="Shirley Li"
              />
              <Card
                position="President"
                img_src="Karthik.png"
                name="Karthik Manishankar"
              />
            </div>
            <div className="row gy-4 justify-content-center align-items-center pb-5 gap-5">
              <Card position="Treasurer" img_src="tim.png" name="Timothy Kim" />
              <Card
                position="Event Chair"
                img_src="annemai.jpg"
                name="Anne Mai"
              />
              <Card
                position="Social Media"
                img_src="bineet.png"
                name="Bineet Anand"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-info">
        <h1 className="text-center" style={{ padding: "3%" }}>
          Connect With Us
        </h1>
        <div className="row justify-content-center mx-auto">
          <div className="col-md-2">
            <a href="#" className="social-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                viewBox="0 0 40 40"
              >
                <g clip-path="url(#clip0)">
                  <path
                    fill="#fff"
                    d="M35.7143 -0.142822H4.28571C3.14907 -0.142822 2.05898 0.308707 1.25526 1.11243C0.451529 1.91616 0 3.00625 0 4.14289L0 35.5715C0 36.7081 0.451529 37.7982 1.25526 38.6019C2.05898 39.4057 3.14907 39.8572 4.28571 39.8572H16.5402V26.2581H10.9152V19.8572H16.5402V14.9786C16.5402 9.4295 19.8438 6.36432 24.9036 6.36432C27.3268 6.36432 29.8607 6.79646 29.8607 6.79646V12.2429H27.0688C24.3179 12.2429 23.4598 13.95 23.4598 15.7009V19.8572H29.6009L28.6188 26.2581H23.4598V39.8572H35.7143C36.8509 39.8572 37.941 39.4057 38.7447 38.6019C39.5485 37.7982 40 36.7081 40 35.5715V4.14289C40 3.00625 39.5485 1.91616 38.7447 1.11243C37.941 0.308707 36.8509 -0.142822 35.7143 -0.142822Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="40" height="40" fill="#fff" rx="10" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <p className="fs-4">Facebook</p>
          </div>

          <div className="col-md-2">
            <a href="#" className="social-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="74"
                fill="none"
                viewBox="0 0 40 44"
              >
                <path
                  fill="#fff"
                  d="M35.1854 0C37.782 0 39.8763 2.04865 40 4.45946V43.2432L35.0561 39.1477L32.3413 36.7369L29.379 34.218L30.6164 38.191H4.69089C2.10167 38.191 0 36.2721 0 33.7297V4.46847C0 2.05766 2.10536 0.00540541 4.70012 0.00540541H35.1724L35.1854 0ZM23.8866 10.2396H23.8312L23.4581 10.6C27.2866 11.6811 29.1389 13.3694 29.1389 13.3694C26.6716 12.1658 24.448 11.564 22.2245 11.3207C20.6178 11.0775 19.011 11.2054 17.6536 11.3207H17.2843C16.4163 11.3207 14.5695 11.6811 12.0947 12.645C11.2323 13.0108 10.7373 13.2505 10.7373 13.2505C10.7373 13.2505 12.5878 11.445 16.6656 10.4811L16.4163 10.2378C16.4163 10.2378 13.3284 10.1225 9.99492 12.5261C9.99492 12.5261 6.66143 18.191 6.66143 25.1748C6.66143 25.1748 8.50824 28.3099 13.574 28.4288C13.574 28.4288 14.3128 27.4685 15.0607 26.6234C12.2166 25.7802 11.1085 24.0937 11.1085 24.0937C11.1085 24.0937 11.356 24.2126 11.7272 24.4541H11.838C11.8934 24.4541 11.9193 24.4811 11.9488 24.5081V24.5189C11.9784 24.5477 12.0042 24.573 12.0597 24.573C12.6691 24.818 13.2785 25.0595 13.7772 25.2937C14.8436 25.7391 15.959 26.0631 17.1014 26.2595C18.819 26.5027 20.7877 26.6198 23.0297 26.2595C24.1378 26.0162 25.2459 25.7784 26.3539 25.2955C27.0742 24.9351 27.9607 24.5748 28.9339 23.9676C28.9339 23.9676 27.8258 25.6541 24.8617 26.4973C25.4712 27.3369 26.3299 28.2991 26.3299 28.2991C31.3976 28.191 33.3663 25.0559 33.4771 25.1892C33.4771 18.2162 30.1251 12.5405 30.1251 12.5405C27.1056 10.3532 24.28 10.2703 23.7813 10.2703L23.8848 10.2342L23.8866 10.2396ZM24.1969 18.191C25.4952 18.191 26.5423 19.2721 26.5423 20.5964C26.5423 21.9297 25.4896 23.0108 24.1969 23.0108C22.9041 23.0108 21.8514 21.9297 21.8514 20.6072C21.8551 19.2739 22.9096 18.1964 24.1969 18.1964V18.191ZM15.8068 18.191C17.0996 18.191 18.1449 19.2721 18.1449 20.5964C18.1449 21.9297 17.0922 23.0108 15.7994 23.0108C14.5067 23.0108 13.454 21.9297 13.454 20.6072C13.454 19.2739 14.5067 18.1964 15.7994 18.1964L15.8068 18.191Z"
                />
              </svg>
            </a>
            <p className="fs-4 text-color">Discord</p>
          </div>

          <div className="col-md-2">
            <a href="#" className="social-icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#fff"
                  d="M20.0045 9.7445C14.3291 9.7445 9.75125 14.3233 9.75125 20C9.75125 25.6767 14.3291 30.2555 20.0045 30.2555C25.6799 30.2555 30.2577 25.6767 30.2577 20C30.2577 14.3233 25.6799 9.7445 20.0045 9.7445ZM20.0045 26.6674C16.3369 26.6674 13.3385 23.6773 13.3385 20C13.3385 16.3227 16.3279 13.3326 20.0045 13.3326C23.681 13.3326 26.6704 16.3227 26.6704 20C26.6704 23.6773 23.6721 26.6674 20.0045 26.6674ZM33.0686 9.325C33.0686 10.6549 31.9978 11.7171 30.6771 11.7171C29.3475 11.7171 28.2856 10.646 28.2856 9.325C28.2856 8.00402 29.3564 6.93295 30.6771 6.93295C31.9978 6.93295 33.0686 8.00402 33.0686 9.325ZM39.8595 11.7528C39.7078 8.54848 38.976 5.71014 36.6291 3.37164C34.2911 1.03314 31.4534 0.301238 28.2499 0.140578C24.9481 -0.0468593 15.0519 -0.0468593 11.7501 0.140578C8.55549 0.292313 5.71779 1.02421 3.37089 3.36271C1.02398 5.70122 0.301171 8.53955 0.140547 11.7438C-0.0468489 15.0463 -0.0468489 24.9448 0.140547 28.2472C0.292248 31.4515 1.02398 34.2899 3.37089 36.6284C5.71779 38.9669 8.54657 39.6988 11.7501 39.8594C15.0519 40.0469 24.9481 40.0469 28.2499 39.8594C31.4534 39.7077 34.2911 38.9758 36.6291 36.6284C38.9671 34.2899 39.6988 31.4515 39.8595 28.2472C40.0468 24.9448 40.0468 15.0552 39.8595 11.7528ZM35.594 31.7907C34.8979 33.5401 33.5505 34.8879 31.7925 35.593C29.1601 36.6373 22.9136 36.3963 20.0045 36.3963C17.0954 36.3963 10.8399 36.6284 8.2164 35.593C6.46737 34.8968 5.11991 33.549 4.41495 31.7907C3.37089 29.1576 3.61182 22.9097 3.61182 20C3.61182 17.0903 3.37981 10.8334 4.41495 8.2093C5.11099 6.45989 6.45845 5.11213 8.2164 4.40701C10.8489 3.36271 17.0954 3.6037 20.0045 3.6037C22.9136 3.6037 29.169 3.37164 31.7925 4.40701C33.5416 5.1032 34.889 6.45096 35.594 8.2093C36.638 10.8424 36.3971 17.0903 36.3971 20C36.3971 22.9097 36.638 29.1666 35.594 31.7907Z"
                />
              </svg>
            </a>
            <p className="fs-4 text-center">Instagram</p>
          </div>
        </div>

        <p className="fs-5 pt-5 text-center p-4">Thanks for stopping by!</p>
      </div>
    </>
  );
};

function Involved({ img_src, heading, body, color, children }) {
  return (
    <div className="row justify-content-center" style={{ paddingBottom: "8%" }}>
      <div className="col-lg-4 mt-sm-4  me-lg-5">
        <img
          src={img_src}
          class="secondary-image"
          alt="club-activities"
          style={{ border: "8px solid " + color }}
        />
      </div>

      <div className="col-lg-6 ps-lg-5 ps-xl-1 text-lg-start">
        <h3 className="fs-3 fw-bold mt-sm-4 " style={{ color: color }}>
          {heading}
        </h3>
        <p className="fs-5 mt-4 ">{body}</p>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

function Card({ position, img_src, name }) {
  return (
    <div
      className="pb-5 cards"
      style={{
        border: "0.2rem solid #93C3DE",
        borderRadius: "10%",
        boxShadow: "0px 3px rgb(185, 186, 186)",
        boxSizing: "borer-box",
      }}
    >
      <p className="text-center fw-bold mt-1">{position}</p>
      <img src={img_src} alt="" className="overflow-hidden tetiary-image" />
      <p className="text-center pt-3 fw-bold">{name}</p>
      <a href="#" className="pt-1" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="25"
          fill="none"
          viewBox="0 0 55 55"
        >
          <path
            fill="#93C3DE"
            fill-rule="evenodd"
            d="M6.80149e-07 4.59501C6.80149e-07 3.37634 0.484115 2.20758 1.34584 1.34585C2.20757 0.484121 3.37633 6.12578e-06 4.595 6.12578e-06H50.4C51.0039 -0.000980253 51.6021 0.117163 52.1604 0.347673C52.7186 0.578182 53.2258 0.916531 53.6531 1.34335C54.0804 1.77016 54.4193 2.27706 54.6504 2.83503C54.8815 3.393 55.0003
     3.99107 55 4.59501V50.4C55.0007 51.0041 54.8822 51.6023 54.6514 52.1605C54.4206 52.7188 54.0821 53.226 53.655 53.6533C53.228 54.0805 52.721 54.4194 52.1628 54.6505C51.6047 54.8816 51.0065 55.0003 50.4025 55H4.595C3.99137 55 3.39365 54.8811 2.83599 54.65C2.27834 54.4189 1.77168 54.0802 1.34496
      53.6533C0.918243 53.2263 0.57983 52.7195 0.349057 52.1617C0.118283 51.6039 -0.000327739 51.0061 6.80149e-07 50.4025V4.59501ZM21.77 20.97H29.2175V24.71C30.2925 22.56 33.0425 20.625 37.175 20.625C45.0975 20.625 46.975 24.9075 46.975 32.765V47.32H38.9575V34.555C38.9575 30.08 37.8825
     27.555 35.1525 27.555C31.365 27.555 29.79 30.2775 29.79 34.555V47.32H21.77V20.97ZM8.02 46.9775H16.04V20.625H8.02V46.975V46.9775ZM17.1875 12.03C17.2026 12.7167 17.0804 13.3995 16.8281 14.0383C16.5758 14.6771 16.1984 15.2591 15.7181 15.7501C15.2378 16.2411 14.6642 16.6312 14.0311 16.8975C13.398 17.1639 12.7181 17.301 12.0313 17.301C11.3444 17.301 10.6645 17.1639
      10.0314 16.8975C9.39825 16.6312 8.82472 16.2411 8.34442 15.7501C7.86412 15.2591 7.48673 14.6771 7.2344 14.0383C6.98207 13.3995 6.85988 12.7167 6.875 12.03C6.90468 10.6821 7.46096 9.39948 8.42471 8.45672C9.38846 7.51396 10.6831 6.98605 12.0313 6.98605C13.3794 6.98605 14.674 7.51396 15.6378 8.45672C16.6015 9.39948 17.1578 10.6821 17.1875 12.03Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
}

export default About;
