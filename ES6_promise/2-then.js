export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response fron API');
      return {
        status: 200,
		body: 'succes',
      };
	})
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
	});
}