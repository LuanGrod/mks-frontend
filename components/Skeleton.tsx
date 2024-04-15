import ContentLoader from "react-content-loader"

interface SkeletonProps {
  props: any
}

export default async function Skeleton({ props }: SkeletonProps) {
  return (
    <div style={{ borderRadius: 50 }}>
      <ContentLoader
        speed={4}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#c4c4c480"
        foregroundColor="#ffffff80"
        {...props}
      >
        <rect x="0" y="0" rx="12" ry="12" width="218" height="285" />
      </ContentLoader>
    </div>
  );
}
