import React, { useRef } from "react";
import { WebView } from "react-native-webview";

const FormSubmitter = ({ websiteUrl, formData }) => {
	const webViewRef = useRef(null);

	const injectFormSubmissionScript = () => {
		console.log("starting script with ");
		console.log(formData.username);
		const script = `
      (function() {
        // Wait for the page to load (adjust timeout as needed)
        setTimeout(() => {
          // Fill out the form fields (adjust selectors to match your form)
          document.getElementById('username').value = '${formData.username}';
          document.getElementById('password').value = '${formData.password}';

          // Submit the form (adjust selector to match your form's submit button)
          document.querySelector('button[type="submit"]').click();
        }, 1000); // 1-second delay
      })();
    `;

		webViewRef.current.injectJavaScript(script);
	};

	console.log("injected successfully");
	return (
		<WebView
			ref={webViewRef}
			source={{ uri: websiteUrl }}
			onLoadEnd={injectFormSubmissionScript} // Inject script after page load
		/>
	);
};

export default FormSubmitter;
