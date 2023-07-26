import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import blog_styles from "@/styles/Blog.module.css";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder-Home</title></Head>

      <div className={styles.container}>
        <main className={`${styles.main} ${inter.className}`}>
          <h1 className={styles.heading}>Hunting Coder</h1>
          <div className={styles.image_container}>
            <Image
              src="/hunting coder.avif"
              width={500}
              height={400}
              alt="Picture of the author"
              priority={false}
            />
          </div>
          <p className={styles.description}>
            A blog website for the hunt of code
          </p>
          <h1 className={styles.heading}>Blogs</h1>
          <h2 className={blog_styles.h3_heading}>1. Python</h2>
          <p className={blog_styles.article}>
            A versatile and beginner-friendly programming language known for its
            simplicity and readability. Python is widely used for web
            development, data analysis, artificial intelligence, and automation.
          </p>

          <h2 className={blog_styles.h3_heading}>2. Laravel</h2>
          <p className={blog_styles.article}>
            Laravel is a powerful PHP framework for building scalable and
            maintainable web applications. It follows the MVC architectural
            pattern and provides features like routing, database integration,
            and authentication. Laravel simplifies backend development and
            offers a rich ecosystem of tools and libraries.
          </p>
          <h2 className={blog_styles.h3_heading}>3. JavaScript</h2>
          <p className={blog_styles.article}>
            The language of the web, JavaScript enables interactive and dynamic
            web pages. It is used for front-end development, back-end
            development with Node.js, and building cross-platform mobile
            applications.
          </p>

          <h2 className={blog_styles.h3_heading}>4. Java</h2>
          <p className={blog_styles.article}>
            A robust and platform-independent language used for building
            enterprise-level applications, Android apps, and large-scale
            systems. Java is known for its performance, security, and extensive
            library ecosystem.
          </p>

          <h2 className={blog_styles.h3_heading}>5. C#</h2>
          <p className={blog_styles.article}>
            A modern programming language developed by Microsoft, C# is used for
            building Windows applications, web services, and game development
            with Unity. It offers strong typing, object-oriented features, and
            interoperability.
          </p>

          <h2 className={blog_styles.h3_heading}>6. Ruby</h2>
          <p className={blog_styles.article}>
            A dynamic and expressive language known for its simplicity and
            productivity. Ruby is commonly used with the Ruby on Rails framework
            for web development and has a strong focus on developer happiness.
          </p>

          <h2 className={blog_styles.h3_heading}>7. Next.js</h2>
          <p className={blog_styles.article}>
            Next.js is a popular React framework that allows for building modern
            web applications with features like server-side rendering, static
            site generation, and an intuitive developer experience. Next.js
            simplifies the setup process and enables efficient development.
          </p>

          <h2 className={blog_styles.h3_heading}>8. Swift</h2>
          <p className={blog_styles.article}>
            Apple&apos;s powerful and intuitive programming language for
            developing iOS, macOS, watchOS, and tvOS applications. Swift offers
            safety, performance, and a modern syntax that simplifies mobile app
            development.
          </p>

          <h2 className={blog_styles.h3_heading}>9. Go</h2>
          <p className={blog_styles.article}>
            A statically-typed language developed by Google, Go is known for its
            simplicity, efficiency, and built-in support for concurrency. Go is
            often used for scalable web applications, networking, and system
            programming.
          </p>

          <h2 className={blog_styles.h3_heading}>10. JavaScript</h2>
          <p className={blog_styles.article}>
            JavaScript is a high-level, interpreted programming language that
            adds interactivity and dynamic behavior to websites. It is the
            language of the web and is used for front-end and back-end
            development, allowing for interactive web experiences.
          </p>

          <h2 className={blog_styles.h3_heading}>11. TypeScript</h2>
          <p className={blog_styles.article}>
            A superset of JavaScript, TypeScript adds static typing and other
            features to enhance JavaScript development. TypeScript is widely
            adopted for large-scale applications and provides improved tooling
            and maintainability.
          </p>

          <h2 className={blog_styles.h3_heading}>12. Rust</h2>
          <p className={blog_styles.article}>
            A systems programming language that focuses on safety, performance,
            and concurrency. Rust provides memory safety guarantees without
            sacrificing low-level control, making it suitable for systems
            programming and performance-critical applications.
          </p>

          <h2 className={blog_styles.h3_heading}>13. PHP</h2>
          <p className={blog_styles.article}>
            A popular server-side scripting language used for web development.
            PHP powers a significant portion of the web and offers extensive
            frameworks like Laravel and WordPress for building dynamic and
            database-driven websites.
          </p>

          <h2 className={blog_styles.h3_heading}>14. Flutter</h2>
          <p className={blog_styles.article}>
            Flutter is an open-source UI software development kit created by
            Google. It enables developers to build beautiful, natively compiled
            applications for mobile, web, and desktop platforms from a single
            codebase. Flutter simplifies mobile development and offers hot
            reload for instant updates.
          </p>
        </main>
      </div>
    </>
  );
}
