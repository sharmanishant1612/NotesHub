import axios from "axios";
import { useContext, useState } from "react";
import { FaEnvelope, FaHome, FaSignOutAlt, FaTrashAlt, FaUpload, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

export default function Profile() {
  const { user, setuser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const userName = user?.name || user?.username || "User";
  const userEmail = user?.email || "No email available";
  const avatarUrl = user?.profileImage || "https://ui-avatars.com/api/?name=User";

  const getToken = () => {
    const token = localStorage.getItem("token");
    return token ? JSON.parse(token) : "";
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setuser(null);
    navigate("/login");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setMessage("Please select a valid image file");
      e.target.value = "";
      return;
    }

    setUploading(true);
    setMessage("");

    const reader = new FileReader();

    reader.onloadend = async () => {
      await axios
        .put(
          "http://localhost:3000/api/user/profile-image",
          { profileImage: reader.result },
          {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          }
        )
        .then((response) => {
          const updatedUser = response.data.user;
          localStorage.setItem("user", JSON.stringify(updatedUser));
          setuser(updatedUser);
          setMessage(response.data.message || "Profile image updated successfully");
        })
        .catch((err) => {
          console.log(err);
          setMessage(err.response?.data?.message || "Unable to upload profile image");
        })
        .finally(() => {
          setUploading(false);
          e.target.value = "";
        });
    };

    reader.onerror = () => {
      setUploading(false);
      setMessage("Unable to read selected image");
      e.target.value = "";
    };

    reader.readAsDataURL(file);
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);
    setMessage("");

    await axios
      .delete("http://localhost:3000/api/user/delete", {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setuser(null);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setShowDeleteConfirm(false);
        setMessage(err.response?.data?.message || "Unable to delete account");
      })
      .finally(() => {
        setDeleting(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10 dark:bg-slate-900">
      <div className="mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl transition duration-300 hover:shadow-2xl dark:bg-slate-800 sm:p-8">
          <div className="mx-auto h-28 w-28 rounded-full border-4 border-indigo-100 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-700">
            <img
              src={avatarUrl}
              alt={`${userName} avatar`}
              className="h-full w-full rounded-full object-cover"
            />
          </div>

          <label className="mx-auto mt-4 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700">
            <FaUpload />
            {uploading ? "Uploading..." : "Change Profile Picture"}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="hidden"
            />
          </label>

          <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
            {userName}
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
            NotesHub Profile
          </p>

          <div className="mt-7 space-y-4 text-left">
            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500 dark:bg-indigo-500/10">
                <FaUser />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Username
                </p>
                <p className="font-semibold text-slate-800 dark:text-white">
                  {userName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/50">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-500/10">
                <FaEnvelope />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="truncate font-semibold text-slate-800 dark:text-white">
                  {userEmail}
                </p>
              </div>
            </div>
          </div>

          {message && (
            <p className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-800">
              {message}
            </p>
          )}

          <div className="mt-8 grid gap-3">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-indigo-700"
            >
              <FaHome />
              Back to Home
            </button>

            <div className="grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700"
            >
              <FaSignOutAlt />
              Logout
            </button>

            <button
              type="button"
              onClick={() => setShowDeleteConfirm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow-md transition duration-300 hover:bg-red-700"
            >
              <FaTrashAlt />
              Delete Account
            </button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Delete account?
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              This will permanently delete your account and related data.
            </p>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                disabled={deleting}
                className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100 disabled:opacity-70 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                disabled={deleting}
                className="rounded-xl bg-red-500 px-5 py-2.5 font-semibold text-white transition duration-300 hover:bg-red-700 disabled:opacity-70"
              >
                {deleting ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
