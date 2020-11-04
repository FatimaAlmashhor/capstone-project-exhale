import fire from '../firebase';

// export default function SendDataToDB() {
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
export const login = (email, password) => {
  fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((u) => {
      // console.log(u);
    })
    .catch((error) => {
      // console.log(error);
    });
  // console.log('logged in!');
};

export const signup = (email, password, name) => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((u) => {
      // const nameRef =
      fire.database().ref('name').orderByKey().limitToLast(100);
      fire.database().ref('name').push(name);
      // const emailRef =
      fire.database().ref('email').orderByKey().limitToLast(100);
      fire.database().ref('email').push(email);
    })
    .catch((error) => {
      // console.log(error);
    });
  // console.log('Signed up');
};
//   return (
//     <div className="w-full max-w-xs px-8 pt-6 pb-8 mx-auto mt-10 mb-4 bg-white rounded shadow-md">
//       <input
//         className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//         placeholder="Enter your name"
//       />
//       <br />
//       <input
//         className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//         type="email"
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your email"
//       />
//       <br />
//       <input
//         className="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//         type="password"
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter a password"
//       />
//       <br />
//       <button
//         onClick={() => {
//           signup();
//
//         }}
//         type="button"
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//       >
//         Sign Up
//       </button>
//       <button
//         onClick={() => login()}
//         type="button"
//         className="px-4 py-2 ml-6 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
//       >
//         Log In
//       </button>
//     </div>
//   );
// }
