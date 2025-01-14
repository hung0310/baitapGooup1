import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.4.1.min.js" defer />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" defer />
          <script src="/static/assets/lib/wow/wow.min.js" defer />
          <script src="/static/assets/lib/easing/easing.min.js" defer />
          <script src="/static/assets/lib/waypoints/waypoints.min.js" defer />
          <script src="/static/assets/lib/owlcarousel/owl.carousel.min.js" defer />
          <script src="/static/assets/js/main.js" defer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;