import ContentLoader from "react-content-loader"
import { motion } from "framer-motion";
interface SkeletonProps {

}

export default async function Skeleton({ }: SkeletonProps) {
  const skeleton = [0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <div style={{
      flexGrow: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div
        style={{
          width: "938px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "31px 22px",
        }}
      >
        {
          skeleton.map((index) => (
            <ContentLoader 
            key={index}
            speed={0.5}
            width={218}
            height={285}
            viewBox="0 0 218 285"
            backgroundColor="#c4c4c4"
            foregroundColor="#ffffff"
          >
            <rect x="0" y="0" rx="12" ry="12" width="218" height="285" />
          </ContentLoader>
          ))
        }
      </div>
    </div >
  );
}
