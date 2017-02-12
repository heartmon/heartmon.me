import { initializePage } from '~/utils';
import { BaseLayout } from '~/ui/layouts'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {BookmarkContainer} from '~/ui/containers/bookmark'

const Bookmark = () => (
    <BaseLayout>
    <div className="row">
        <div className="col-xs-12">
          <div><TextField
      hintText="Full width"
      fullWidth={true}
    /></div>
            <div className="box">Responsive</div>
        </div>
      </div>
      I bims de home page. Bookmark
      <BookmarkContainer />

      <div>
      <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="images/nature-600-337.jpg" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
      </div>
      <div>
        <FloatingActionButton>
          <ContentAdd />
        </FloatingActionButton>
      </div>
   </BaseLayout>
);

export default initializePage(Bookmark);
