import ScrollableNote from 'components/ScrollableNote/ScrollableNote';
import styles from 'pages/Note/notePage.module.scss';
import NotePageLayout from 'pages/Note/NotePageLayout/NotePageLayout';

const NotePage = () => {
	return (
		<NotePageLayout>
			<span className={styles.title}>
				текст <br /> сообщения
			</span>
			<ScrollableNote height={430}>
				<p className={styles.text}>
					<strong>Lorem ipsum dolor sit amet</strong>, consectetur
					adipisicing elit. Aliquid aut doloremque exercitationem
					expedita ipsam nemo quas repudiandae. Accusamus, animi,
					deserunt dignissimos ea eaque enim, ex expedita inventore
					iusto libero minima molestiae nam obcaecati odio odit quam
					voluptate. Accusantium aspernatur assumenda consequuntur,
					cumque deleniti doloribus eligendi facere illo incidunt
					labore molestiae molestias, non numquam odio praesentium
					provident quae qui quia repellendus reprehenderit
					repudiandae saepe tenetur vitae? Culpa ea eius fugiat hic
					illum laudantium ratione, sint voluptate voluptatum. Aliquid
					commodi eaque id iste nesciunt obcaecati porro quam
					temporibus. Animi architecto blanditiis doloremque fugiat
					iste perferendis possimus quas recusandae reprehenderit
					sunt? Aspernatur dicta exercitationem illo iste quis ratione
					soluta voluptas. Accusamus accusantium animi aperiam aut
					eius ex fugiat illo incidunt ipsa, ipsam iste laboriosam
					magni mollitia necessitatibus nostrum perferendis, soluta,
					tempora vitae? Amet, animi aspernatur beatae dolorem eum
					eveniet iste laudantium molestiae obcaecati quo suscipit,
					vel veniam vero. Accusamus aliquam animi assumenda autem,
					consequuntur dolore ducimus facere harum inventore libero
					magni maiores modi molestias nesciunt officia perspiciatis
					quae tempore, voluptates. At consectetur, consequuntur
					deserunt eveniet ipsam iure laborum numquam, perferendis
					quae quidem quos sapiente sint, voluptates? Blanditiis
					consequuntur esse incidunt nam quaerat. Ad blanditiis,
					consectetur, corporis eius esse eum hic illo inventore iste
					magni, obcaecati odit similique tempore unde veniam vero
					voluptate! Aliquam aspernatur atque, blanditiis consectetur
					expedita facere ipsa molestiae, neque, non obcaecati rem ut
					velit. Blanditiis culpa deserunt dolorum ea eligendi enim et
					fugiat illo impedit, magnam minima modi necessitatibus non
					obcaecati ratione sequi soluta totam velit? Assumenda aut
					cupiditate deleniti dignissimos eveniet illo iusto,
					obcaecati omnis quaerat quasi quibusdam quidem repudiandae
					sapiente similique, ut veritatis voluptatem. Architecto
					aspernatur autem commodi consequuntur debitis dignissimos
					dolorem eaque eligendi error est expedita ipsum libero
					molestiae molestias nostrum odio officiis praesentium quae
					quia ratione, reprehenderit rerum soluta unde ut vel
					veritatis vero voluptate. Expedita?
				</p>
			</ScrollableNote>
		</NotePageLayout>
	);
};

export default NotePage;
