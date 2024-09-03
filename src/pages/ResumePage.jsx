import repoLinks from '../components/UI/RepoLinks';
const [vehicleBuilder,employeeTracker,recipeVault,readmeGenerator,drillGame,reactPortfolio] = repoLinks;
export default function ResumePage () {
    return (
        <div class="container pt-5">
            <div>
                <h2>Skills</h2>
                <ul>
                    <li>HTML,CSS,GIT</li>
                    <li>JAVASCRIPT,TYPESCRIPT</li>
                    <li>WEB API'S,SQL</li>
                    <li>NODE JS</li>
                    <li>REACT</li>
                </ul>
            </div>
            <div>
                <h2>Front-End Projects</h2>
                <ul>
                    <li><a href={vehicleBuilder.link}>Vehicle Builder</a></li>
                    <li><a href={employeeTracker.link}>Employee-Tracker</a></li>
                    <li><a href={recipeVault.link}>Recipe-Vault</a></li>
                    <li><a href={readmeGenerator.link}>Read-Me Generator</a></li>
                </ul>
            </div>
            <p></p>
        </div>
    );





}