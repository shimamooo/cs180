import { signIn } from "~/server/auth";

export const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("forwardemail", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Sign in to Investor Portal</button>
    </form>
  );
};
