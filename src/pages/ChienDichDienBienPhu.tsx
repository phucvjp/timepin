import AnimatedCursor from '../components/AnimatedCursor';
import DBPHero from '../components/DBPHero';
import DBPTimeline from '../components/DBPTimeline';
import DBPMap from '../components/DBPMap';
import DBPStats from '../components/DBPStats';
import DBPFooter from '../components/DBPFooter';

const ChienDichDienBienPhu = () => {

  return (
    <AnimatedCursor>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900 text-white">
        {/* Hero Section */}
        <DBPHero />
        
        {/* Timeline Section */}
        <DBPTimeline />
        
        {/* Map Section */}
        <DBPMap />
        
        {/* Statistics Section */}
        <DBPStats />
        
        {/* Footer */}
        <DBPFooter />
      </div>
    </AnimatedCursor>
  );
};

export default ChienDichDienBienPhu;