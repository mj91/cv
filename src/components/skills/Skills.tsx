import { Interests } from './interests/Interests'
import { Qualifications } from './qualifications/Qualifications'
import { SoftSkills } from './soft-skills/SoftSkills'

export const Skills = () => {
  return (
    <div>
      <Qualifications />
      <SoftSkills />
      <Interests />
    </div>
  )
}
