
import { useNavigate } from "react-router-dom";
import IntroAnimation from "../components/IntroAnimation";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[9999]">
      <IntroAnimation
        onComplete={() => {
          navigate("/home", { replace: true });
        }}
      />
    </div>
  );
}
