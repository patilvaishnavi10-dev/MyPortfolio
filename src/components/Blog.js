// src/components/Blog.js
export default function Blog() {
  const posts = [
    {
      title: "Learning React",
      content:
        "I started React development and learned about components, props, and state. React makes it easy to build reusable components and manage data flow."
    },
    {
      title: "My First Project",
      content:
        "Built a shopping cart project for college practicals. It helped me understand the concept of state management, props, and event handling in React."
    },
    {
      title: "Understanding Routing",
      content:
        "I implemented React Router to navigate between pages without refreshing the site. This improved user experience and taught me how single-page apps work."
    },
    {
      title: "Working with Hooks",
      content:
        "Hooks like useState and useEffect made coding simpler. I realized how powerful functional components are compared to class components."
    },
    {
      title: "Styling in React",
      content:
        "I experimented with inline styles, CSS modules, and styled-components. Styling React apps can be done in multiple ways depending on project needs."
    },
    {
      title: "Future Goals",
      content:
        "I want to explore full-stack development (MERN stack) and learn how to deploy real-world apps. I’m also interested in AI tools and how they integrate with web development."
    }
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📝 My Blog</h1>
      <div style={styles.grid}>
        {posts.map((post, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h3 style={styles.cardTitle}>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #075294ff 0%, #bdeef1ff 100%)",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center"
  },
  title: {
    color: "white",
    marginBottom: "30px",
    fontSize: "2rem"
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    width: "280px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: "transform 0.3s ease",
    textAlign: "left"
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#0077b6"
  }
};
