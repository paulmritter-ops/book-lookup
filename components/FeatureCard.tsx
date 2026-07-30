type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="border-t-4 border-yellow-400 rounded-lg p-6 text-center shadow-sm">

      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="font-bold text-xl mt-3 text-purple-900">
        {title}
      </h3>

      <p className="text-gray-700 mt-2">
        {description}
      </p>

    </div>
  );
}