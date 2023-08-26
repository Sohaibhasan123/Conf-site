import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './Component/root/AppRouter';
import HomePage from './Pages/HomePage/HomePage';
import Committee from './Component/Home/committee/committee';
import AuthorHomePage from './Pages/AuthorDashboard/AuthorHomePage/AuthorHomePage';
import PrivateRoute from './Component/Shared/PrivateRoute/PrivateRoute';
import AddAdmin from './Pages/TractChair/AddAdmin/AddAdmin';

import Services from './Component/AuthorComponent/AuthorHistory/Services/Services';
import ImportantDates from './Pages/ImportantDate/ImportantDates';
import Contact from './Pages/Contact/Contact';
import LogIn from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import TractChairHomePage from './Pages/TractChair/TractChairHomePage/TractChairHomePage';
import TractPrivateRoute from './Component/Shared/TractPrivateRoute/TractPrivateRoute';
import TractRoot from './Component/root/tractRoot';
import AdminPrivetRoute from './Component/Shared/AdminPrivetRoute/AdminPrivetRoute';
import AdminOutlet from './Component/root/AdminOutlet';
import AdminHomePage from './Pages/AdminDashboard/AdminHomePage/AdminHomePage';
import ReviewerHomePage from './Pages/ReviewerDashboard/ReviewerHomePage/ReviewerHomePage';
import ReviewerOutlet from './Component/root/ReviewerOutlet';
import AddReviewer from './Pages/TractChair/AddReviewer/AddReviewer';
import ReviewerPrivetRoute from './Component/Shared/ReviewerPrivetRoute/ReviewerPrivetRoute';
import SubmitPaperForm from './Pages/AuthorDashboard/SubmitPaperForm/SubmitPaperForm'
import AuthorInfoForSubmission from './Component/AuthorComponent/AuthorSubmitForm/AuthorInfoForSubmission';
import RequestForReviewer from './Pages/AuthorDashboard/RequestForReviewer/RequestForReviewer';
import AuthorOutlet from './Component/root/AuthorOutlet';



function App() {
  return (
    <div className='app'>




      <Routes>

        <Route path="/" element={<AppRouter />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dates" element={<ImportantDates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/committee" element={<Committee />} />
        </Route>

      </Routes>
      <Routes>
        <Route path="/author" element={<AuthorOutlet />}>



          <Route path="/author" element={<PrivateRoute><AuthorHomePage /></PrivateRoute>} />
          <Route path="/author/reviewer-qualification" element={<PrivateRoute><RequestForReviewer /></PrivateRoute>} />
          <Route path="/author/submit-paper" element={<SubmitPaperForm />} />
          <Route path="/author/author-form" element={<AuthorInfoForSubmission />} />
          <Route path="/author/history" element={<PrivateRoute><Services /></PrivateRoute>} />

        </Route>
      </Routes>
      <Routes>
        <Route path="/admin" element={<AdminOutlet />}>
          <Route path='/admin/dashboard' element={<PrivateRoute><AdminPrivetRoute><AdminHomePage /></AdminPrivetRoute></PrivateRoute>}></Route>
        </Route>

      </Routes>


      <Routes>
        <Route path="/tract-chair" element={<TractRoot />}>
          <Route path='/tract-chair' element={<PrivateRoute><TractPrivateRoute><TractChairHomePage /></TractPrivateRoute></PrivateRoute>}>
          </Route>

          <Route path='/tract-chair/make-admin' element={<PrivateRoute><TractPrivateRoute><AddAdmin /></TractPrivateRoute></PrivateRoute>}>
          </Route>
          <Route path='/tract-chair/add-reviewer' element={<PrivateRoute><TractPrivateRoute><AddReviewer /></TractPrivateRoute></PrivateRoute>}>
          </Route>
        </Route>
      </Routes>



      <Routes>
        <Route path="/reviewer" element={<ReviewerOutlet />}>
          <Route path='/reviewer' element={<PrivateRoute><ReviewerPrivetRoute><ReviewerHomePage /></ReviewerPrivetRoute></PrivateRoute>}>
          </Route>
        </Route>
      </Routes>





    </div>
  );
}

export default App;
