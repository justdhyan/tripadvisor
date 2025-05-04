
import React from 'react';
import { Badge } from './ui/badge';

interface NewFeatureBadgeProps {
  className?: string;
}

const NewFeatureBadge = ({ className = '' }: NewFeatureBadgeProps) => {
  return (
    <Badge variant="outline" className={`bg-gray-100 text-gray-600 ${className}`}>
      NEW
    </Badge>
  );
};

export default NewFeatureBadge;
