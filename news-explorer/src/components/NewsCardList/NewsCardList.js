import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <div className="newscard-list">
      <h3 className="newscard-list__title">Search results</h3>
      <NewsCard
        date={"November 4, 2020"}
        title={"NewsCard Title asdasdas asdasd asdasdasfd gaedga sdadsad"}
        description={"description description description description description"}
        author={"NewsCard Author"}
        link={"https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"}
      />
      <NewsCard
        date={"November 4, 2020"}
        title={"NewsCard Title"}
        description={"description description description description description"}
        author={"NewsCard Author"}
        link={"https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"}
      />
      <NewsCard
        date={"November 4, 2020"}
        title={"NewsCard Title"}
        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu maximus justo. Proin blandit vulputate lacus non lobortis. Duis aliquam laoreet lorem vel pulvinar. Nam eget lorem dui. Donec in justo nec dolor sodales mollis. Sed vulputate, orci eget sodales commodo, risus lorem condimentum nunc, id faucibus nulla dui at turpis. Phasellus molestie accumsan pellentesque. Cras aliquam sem at sem vestibulum, vitae pretium ligula ullamcorper. Aliquam ut leo vitae nibh maximus vestibulum. Cras quis aliquet mi, nec imperdiet leo. Vivamus odio turpis, tempus nec tempus sed, cursus semper eros. Donec odio urna, dapibus congue felis a, posuere ultricies urna."}
        author={"NewsCard Author"}
        link={"https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"}
      />
      <NewsCard
        date={"November 4, 2020"}
        title={"NewsCard Title"}
        description={"description description description description description"}
        author={"NewsCard Author"}
        link={"https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg"}
      />
    </div>
  );
}

export default NewsCardList;
