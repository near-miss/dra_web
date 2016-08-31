---  
title: "Process Risk Assessment Uses Big Data"
date: 2013-06-01
author: Ankur Pariyani, Ulku Oktem, and Deborah Grubbe
publication: Control Engineering
logo: controleng
category: Publications
type: Industry Magazine Article
source: http://www.controleng.com/single-article/process-risk-assessment-uses-big-data/632b3ce8d25102b9ab558b3833cc5885.html
---

> Technology Update: Predictive, process risk assessment can use big data to assess risks dynamically and report automatically, empowering plant personnel to identify issues, taking necessary preventive measures to address them, avoiding a related shutdown incident or accident.

It’s a typical Monday morning scene at a refinery: the team (plant manager, supervisors, and head operators) gets together to review the past week’s performance and the coming week’s plans. They talk about the industrial fluid-catalytic-cracking-unit and the key question, “How was the catalyst stand pipe’s performance?” The team answers are: “Not great; there were more alarms than usual; and we’re not sure why.”

Plant management knows the regenerated catalyst stand pipe is prone to disturbances, which leads to frustrating operational “hiccups” (and trips) every now and then. It’s one of the most profitable units in the refinery, with a best-in-class historian and manufacturing intelligence software. The systems generate hundreds of thousands of data points. Yet, the magnitude of risks and reliability associated with the stand pipe (and how they change dynamically) remains unknown, creating challenges in managing its operation for optimum efficiency.

![Risk Pyramid](http://www.controleng.com/uploads/RTEmagicC_ctl1306-tu-risk-Near-Miss-Mgt-Fig1-pyramid-w.jpg.jpg)

This type of scene plays out often in refineries across the globe and indicates a growing problem as equipment ages and experienced operators retire. With recent advances in control and monitoring systems, facilities are getting overloaded with data—without clear insights into process performance, especially development of process risks. Hence, over the past few years, facilities have become data rich but information poor; this is typically referred to as the “big data challenge.”

Big data is indeed big. Typically, more than 5 billion data points are recorded every 6 months in a plant with about 320 tags, recording sensor measurements every second. It is often characterized by four Vs: volume, variety, velocity, and variability, which change with time. Lost in the big data flood are indicators that can help plants understand the dynamically changing risks and avoid some of the $10 billion losses the U.S. chemical and petrochemical industry experience annually (due to unexpected shutdowns).

Research shows that taking a different-in-kind approach to harnessing big data—based on processing the information directly with advanced data mining techniques—creates a wealth of insights that were previously unavailable. This has significant potential to transform the way facilities operate, and to reduce unexpected disruptions.

Current process risk analysis methods leave gaps in the risk assessment landscape. A more innovative approach for predictive risk assessment can help facilities prevent accidents and unexpected shutdowns, and operate reliably with reduced risk profile.

Current risk analyses, gaps

Improved process risk management is the primary outcome of the widely used Process Safety Management (PSM) standard, which is promulgated by the U.S. Occupational Safety and Health Administration (OSHA) to maintain and improve safety, operability, and productivity of plant operations. Advances have been made in the process risk assessment area in the last decade, though significant gaps remain for some facilities.

Risk analysis techniques and associated gaps are as follows:

1. Quantitative risk assessment (QRA). Typically, QRAs are conducted once every 3-5 years by most facilities. These use various data sources available to the industry, such as incident data, material safety data, and equipment and human reliability data, to identify incident scenarios and evaluate risks by defining the probability of failure and their potential consequences. They help users identify areas for risk reduction.

Gaps: Because QRA mostly involves incident and failure data (excluding day-to-day process and alarm data that contain information on precursor events), it has limited predictive power. Interestingly, a summary report (Lauridsen et al., 2002) by the Joint Research Centre and Denmark Risk National Laboratory of the European Commission indicates that risk estimates based on generic reliability/failure databases are prone to biases and could result in large deviations depending on data sources. Their project employed seven partners that conducted risk analyses for the same ammonia storage facility, finding "large differences in frequency assessments of the same hazardous scenarios." For these reasons, the importance of using process-specific databases for objective risk analyses has been gaining recognition.

2. Safety audits. Many facilities conduct safety, health, and environmental audits using internal teams and large consulting companies, which require significant resources. The frequency and effectiveness of internal safety audits depend highly on resource availability of the facility. In most cases, safety professionals with some support from engineers, operators, and sometimes even managers periodically review operating procedures and safety records, and conduct limited number of interviews about safety practices.

Gaps: Formal, in-depth safety audits are conducted periodically, with frequency ranging from once a year (in extremely rare cases more than once a year) to once in several years. An integral part of these audits is to review incident history and observable near-misses that are reported by employees. The latter depends upon the safety culture at the facility and may not always provide a true picture of risks.

Furthermore, these approaches do not have the capability to monitor the change in the process risk levels in real, or even near, time.

3. Operations management and manufacturing intelligence tools. Operations management and manufacturing intelligence software provide key performance indicators (KPIs) for performance monitoring of operations, and assessment of availability and effectiveness of equipment. They focus on trending, reporting, and visual analytics of a select data slice, which help users monitor the variability of different parameters in a time period (shift, day, week, etc.).

Gaps: These systems fall short when it comes to big data analytics, particularly when users need insights on when parts of operation are becoming riskier and how anomalies are creeping in. This requires comparison of operating conditions with their normal behavior to identify new changes and shifts, which is not the focus of these systems. With aging equipment and expected departure of many seasoned operators from the workforce, this handicap becomes even more considerable.

4. Condition-based monitoring tools. These tools identify abnormal situations in real- or near-time by comparing plant performance with its expected behavior and alerting the user when there is a mismatch. Both model-driven (based on quantitative process models) as well as data-driven tools (based on clustering and dimensionality reduction approaches) are available in the market that help operators take immediate corrective actions as real-time alerts are dispatched.

Gaps: Because they are designed to monitor operations in real- or near-time, they do not focus on identifying how risks and likelihood of incidents evolve over a period of time (days, weeks, months). Stated differently, although they provide smart alarms (superior to traditional alarms with fixed thresholds) that cater to the needs of operators on the floor, they are limited in scope when it comes to assessing magnitude of process risks and performance, which is critical information for plant managers, engineers, and reliability personnel for strategic decision making. Further, many require a lot of “care and pain” in maintaining the baseline, making them less attractive. In addition, they often involve remote monitoring and diagnosis of plant data at an offsite facility, which is a resource- and capital-intensive project.

Risk assessment gaps continue to be problematic. Identifying risk levels and drivers dynamically can play an important role in helping busy plant personnel harness the insights in the big data and take appropriate actions rapidly.

Real-time risk analysis

Accidents are rare events that occur when a series of (unfortunate) failures of risk management barriers occur in succession, implying a “chance” factor involved in their occurrences. However, post-incident investigations show that there are several near-misses that occur before these unexpected events that evolve (gradually or often, rapidly) to become abnormal situations (Phimister et al., 2003; Kleindorfer et al., 2003; Pariyani et al., 2010; Kleindorfer et al., 2012). This concept is captured in the well-known “safety pyramid.”


Figure 1 introduces an extended version of the safety pyramid (developed by Near-Miss Management LLC), indicating two categories of near-misses that are precursors to accidents. Observable near-misses are typically noted by the operations team, such as equipment failures, leaks, etc. Hidden near-miss events can be detected only through rigorous data analysis and are typically not observable to the human eye. Finding such events in the process and alarm databases permits detection of operational problems at their developing stages.

With new advances in information technology, a typical industrial plant operation monitors hundreds (even thousands) of parameters continuously, generating extensive data sets (on the order of 10 million to 50 million data points or more daily), exceeding the billion mark within few weeks of operation. Using advanced data-mining techniques finds new anomalies that often cannot be detected using manual or visual data analysis or engineering models. This information is then used to estimate risk that indicates likelihood of normal conditions escalating to abnormal levels, providing insights on potential performance issues in operations, before they become visible or threatening.

The dynamic risk levels guide plant personnel to the sources and nature of the risk (at the lowest data levels) to deploy the right resources in a timely manner, to plan just-in-time (JIT) maintenance, and to head off potential problems, several days or even weeks in advance. Results can be made accessible to all users (plant managers, supervisors, engineers, reliability and maintenance crew, as well as operators) to promote transparency among the operating team and to complement existing PSM, hazard identification, and quantitative risk analysis activities.

See two detailed graphics and two case studies on next page. 

 

Case study 1: Refinery shutdown

Figure 2: Variation of likelihood of shutdown for a pressure differential variable over 4 months shows indicators at shutdown. Courtesy: Near-Miss ManagementAn industrial fluid-catalytic-cracking-unit in a large refinery experienced an unexpected shutdown in the middle of high-demand operations. Despite having a strong PSM program and alarm management philosophy in place, the immunity of process to disturbances deteriorated progressively until the disturbances overpowered the controllers and led to a shutdown.

Investigation afterward used risk analysis methodology to rapidly analyze more than 18 months of data, revealing that the deterioration occurred subtly over a period of several months. Plant systems and personnel that were in place could not see it. Increasing risk levels for several variables (before shutdown) were identified, indicating significant deviations from normal behavior, unseen with standard plotting, trending, and visualization of data. In particular, a pressure differential variable (for one of the stand pipes) was identified, exhibiting strong leading indicators before this shutdown. One leading indicator metric (likelihood of shutdown) increased gradually to 58% over several months. Gaps in standard risk assessment tools did not provide plant management with visibility of changing conditions.

By seeing changing risk levels dynamically (daily, weekly, monthly), a plant operations team can identify when problems begin and use leading indicators to take proactive measures to prevent and avoid operational problems. Predictive knowledge helps engineers and safety personnel monitor effectiveness of existing risk reduction measures and find issues early on, so management can allocate resources to the most needed areas.

Case study 2: Acid runaway

Figure 3: Variations of risk level for a key analyzer variable are shown over 5 months. Courtesy: Near-Miss ManagementAn industrial plant was unable to pinpoint the cause of an acid runaway incident, deemed to be a progressive event, not sudden human error. Figure 3 shows that one of the analyzer variables had been experiencing significant likelihood of exceeding its critical levels for several weeks before the incident. This one piece of information could have prevented the incident, with plant personnel taking corrective actions in advance. There were two periods where hidden data indicated events with high risk potential, not captured with existing risk assessment tools.

Many process conditions, like acid runaway, are difficult to detect with trending and visualization techniques. In such cases, big data analytics can highlight issues that are lost to other approaches and not observable to the human eye. Big-data analytics separates important from insignificant data.

Risks continue

Despite technological advances in automation and growing awareness for process safety, it is evident that industrial facilities still struggle with unexpected shutdowns and incidents. Current risk assessment methods fall short in their capacity to identify and predict risks dynamically. Harnessing process-specific big data with information on precursors indicates when risks are at their developing stages. This approach is independent of reporting by employees, often insufficient in capturing information.

With associated benefits such as transparency of risk information, automatic capture of problems, fact-based decision making, and effective monitoring of maintenance measures, predictive assessment of big data complements current PSM, hazard identification, and quantitative risk analyses techniques, and lays the foundation for next generation risk assessment. 

References

Kleindorfer, P.R., et al., “Accident Epidemiology and the U.S. Chemical Industry: Accident History and Worst-Case Data from RMP*Info,” Risk Analysis, 23 (5), pp. 865–881 (2003).

Kleindorfer, P., Oktem, U.G., Pariyani, A., and Seider, W.D., “Assessment of catastrophe risk and potential losses in industry,” Computers and Chemical Engineering, 47, 85-96 (2012).

Lauridsen, K., Kozine, I., Markert, F., Amendola, A., Christou, M., and Fiori, M., “Assessment of uncertainties in risk analysis of chemical establishments,” Summary Report on ASSURANCE project, Risk National Laboratory, Roskilde, Denmark (2002).

Pariyani, A., Seider, W.D., Oktem, U.G., and Soroush, M., “Incidents Investigation and Dynamic Analysis of Large Databases in Chemical Plants: An FCCU Case Study,” Ind. Eng. Chem. Res., 49, 8062-8079, 2010.

Phimister, J.R., Oktem, U., Kleindorfer, P.R., and Kunreuther, H., “Near-miss incident management in the chemical process industry,” Risk Analysis, 23(3), 445–459 (2003).

-By Ankur Pariyani , PhD, Ulku G. Oktem, PhD, and Deborah L. Grubbe, PE, Near-Miss Management LLC; Edited by Mark T. Hoske, content manager, CFE Media, Control Engineering and Plant Engineering, mhoske@cfemedia.com.

Biographies

Ankur Pariyani, PhD (corresponding author), is co-founder and chief technology officer of Near-Miss Management LLC, where he focuses on product development and innovation. He has authored several papers on risk analysis. Within the Near-Miss Management research team, he has developed breakthrough engineering techniques for identifying critical near-misses and predicting incidents in plants, setting a strong conceptual foundation for future growth. He holds a PhD and M.S. from the University of Pennsylvania and a B. Tech from the Indian Institute of Technology in Guwahati, all in chemical engineering.

Ulku Oktem, PhD, is co-founder and president of Near-Miss Management LLC, where she oversees product development and operations. She also serves as adjunct professor at the Operations and Information Management Department and as senior research fellow at the Risk Center of the Wharton School of the University of Pennsylvania. She holds a PhD in chemical engineering from the University of Delaware, M.S. from the Clarkson College, and B.S. from the Middle East Technical University. Dr. Oktem is globally recognized as a leading expert and researcher in the area of near-miss management systems. Her research has received international recognition and in-depth coverage in several academic journals and other publications. Prior experience includes managing product development and manufacturing of various specialty chemicals at Rohm & Haas Co. She also set up her own consulting company providing safety, health, and environmental training services to Fortune 500 companies.

Deborah L. Grubbe, PE, is chief marketing officer of Near-Miss Management LLC and is owner and president of Operations and Safety Solutions LLC, a consultancy that specializes in process safety leadership and safety culture. She is the former vice president of group safety for BP plc, which had its two safest years under her watch. Grubbe worked 27 years at DuPont, where she held corporate director positions in safety, operations, and engineering. Assignments included capital project implementation, process safety implementation, strategic safety assessments, manufacturing management, and human resources. From 2003-2012, Deborah served as a member of the NASA Aerospace Safety Advisory Panel, and was a consultant on safety culture to the Columbia Shuttle Accident Investigation Board. In May 2012, she received the NASA Exceptional Public Service Medal from NASA Administrator Charles Bolden. Deborah serves on the Purdue University College of Engineering Dean’s Advisory Council. She is an emeritus member of the Center for Chemical Process Safety and has worked with the National Academy of Sciences to support the Demilitarization of the U.S. chemical weapons stockpile. Deborah is a former member of the board of directors of American Institute of Chemical Engineers (AIChE), and is the current chair of the AIChE Institute for Sustainability. In 2002, she received the Purdue Distinguished Engineering Alumni Award, and was named “Engineer of the Year” in the State of Delaware. In May 2010, Deborah was awarded an Honorary Doctorate in Engineering from Purdue University.

ONLINE

www.nearmissmgmt.com 

See article about how Near-Miss Management LLC's commercial software, Dynamic Risk Analyzer, analyzes process and alarm data to dynamically determine risks of continuous processes.

 

Related News:
 Industrial Internet helps make use of saved data - 16.10.2013 09:29
 Industrial Internet brings huge changes, benefits to industry - 15.10.2013 05:16
 Managing alarms effectively - 20.05.2013 11:31
 Safety: Risk management - 09.05.2013 15:48
 Find near-misses hidden inside process data - 10.12.2012 07:00
