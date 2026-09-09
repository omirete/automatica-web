import InfoCard from "@/components/InfoCard";
import MemberCard from "./MemberCard";
import picFederico from "./pictures/federico.png";
import FCi18n from "@/i18n/types/FCi18n";
import dictionary from "./dictionary";

const Team: FCi18n<{}> = ({ lang }) => {
    const localeDict = dictionary[lang];
    return (
        <InfoCard className="bg-dark text-light border border-light">
            <h1 className="text-light mb-4 text-center">
                {localeDict.our_team}
            </h1>
            <div className="d-flex justify-content-center row row-cols-sm-2 row-cols-1">
                <MemberCard
                    picSrc={picFederico.src}
                    name="Federico"
                    subtitle={localeDict.collaborator}
                    urlLinkedIn="https://www.linkedin.com/in/fgiancarelli/"
                    urlGitHub="https://github.com/omirete/"
                    urlWebsite="https://federicogiancarelli.com/"
                />
            </div>
        </InfoCard>
    );
};

export default Team;
