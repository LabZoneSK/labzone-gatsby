import React from "react"

/** Components */
import Layout from "components/layout"
import Section from "components/section"
import SeoHelmet from "components/seo/seoHelmet"

import { GENERAL_EMAIL} from "common/constants";

/** @source: https://gdpr.eu/privacy-notice/?cn-reloaded=1 */

export default function PrivacyPolicy({ location }) {
  return (
    <>
      <SeoHelmet
        title={`Vyhlásenie o ochrane osobných údajov | LabZone`}
        description="Toto vyhlásenie o ochrane osobných údajov popisuje, ako spoločnosť LabZone s.r.o. používa vaše osobné údaje."
      />

      <Layout location={location} hasLastDark>
        <Section sectionClass="container">
          <h1 className="section-title has-text-centered-mobile ">
            Vyhlásenie o ochrane osobných údajov
          </h1>
          <div className="columns section-content">
            <div className="column">
              <p>
                Toto vyhlásenie o ochrane osobných údajov popisuje, ako
                spoločnosť LabZone s.r.o. používa osobné údaje, ktoré sme
                získali od vás pri používaní našich web stránok.
              </p>
              <h3 className="h3">Kto sme</h3>
              <p>
                Prevádzkovateľom tých to web stránok, ktorý spracúva osobné
                údaje je:
                <br />
                <b>
                  LabZone s.r.o., Liptovská 2708/6, 911 08, Trenčín, Slovensko,
                  IČO: 50753681
                </b>
                <br />
                Spoločnosť je zaregistrovaná v Obchodnom registri Okresného súdu
                Trenčín, Oddiel: Sro, vložka číslo 40402/R (ďalej uvádzaný ako
                “LabZone”).
              </p>
              <p>
                Berieme plnú zodpovednosť za ochranu vašich osobných údajov a v
                prípade, že máte otázky k tomutu dokumentu, neváhajte nás
                kontaktovať na { GENERAL_EMAIL}.
              </p>

              <h3 className="h3">Aké údaje zbierame</h3>
              <p>LabZone zbiera nasledujúce informácie:</p>
              <ul>
                <li>Osobné údaje: e-mailová adresa</li>
                <li>Anonymizované analytické údaje</li>
              </ul>

              <h3 className="h3">Ako používame údaje</h3>
              <p>
                The company LabZone specializes in software development of
                mobile and web applications, graphic design, working with
                augmented reality and many others technologies. LabZone thus
                processes personal data related to your person to the following
                extent: e-mail address.
              </p>

              <h3 className="h3">
                Aké sú vaše práva pri ochrane osobných údajov
              </h3>
              <p>
                Radi by sme vás informovali o všetkých vašich právach pri
                ochrane osobných údajov: Každý používateľ má právo na:
              </p>
              <p>
                <b>Právo na prístup k údajom</b> – Máte právo požiadať LabZone o
                zaslanie kópie Vašich osobných údajov. Sme oprávnený účtovať
                poplatok za vykonanie tohto úkonu.
              </p>
              <p>
                <b>Právo na nápravu</b> – Máte právo požiadať našu spoločnosť o
                opravu informácií, o ktorých si myslíte, že nie sú správne.
                Taktiež máte právo požiadať našu spoločnosť o doplnenie
                informácií, ak nie sú kompletné.
              </p>
              <p>
                <b>Právo na zmazanie</b> – Máte právo požiadať vymazanie vašich
                osobných údajov, ktoré naša spoločnosť o vás eviduje, za
                splnenia určitých podmienok.
              </p>
              <p>
                <b>Právo na obmedzenie spracovania</b> – Máte právo požiadať
                našu spoločnosť o obmedzenie spracovania vašich osobných údajov,
                za určitých podmienok.
              </p>
              <p>
                <b>Právo na námietku proti spracovaniu</b> – Máte právo vzniesť
                námietku proti spracovaniu vašich osobných údajov našou
                spoločnosťou, za určitých podmienok.
              </p>
              <p>
                <b>Právo na prenos údajov</b> – You have the right to request
                that Our Company transfer the data that we have collected to
                another organization, or directly to you, under certain
                conditions.
              </p>
              <p>
                Ak pošlete žiadosť, máme jeden mesiac na to, aby sme vám
                odpovedali. Ak chcete uplatniť ktorékoľvek z týchto práv,
                kontaktujte nás na našom emaile: { GENERAL_EMAIL}
              </p>

              <h3>Súbory cookies</h3>
              <p>
                Súbory cookies sú textové súbory umiestnené do vášho počítača na
                zhromažďovanie štandardných informácií z internetového denníka a
                správanie sa návštevníkov na web stránke. Keď navštívite naše
                webové stránky, môžeme informácie zhromažďovať od vás
                automaticky prostredníctvom súborov cookie alebo podobných
                technológií.
              </p>
              <p>
                Pre viac informácií o Cookies navštívte{" "}
                <a href="https://allaboutcookies.org" rel="nofollow">
                  allaboutcookies.org
                </a>
                .
              </p>
              <h3>Ako používame súbory cookies</h3>
              <p>
                LabZone používa cookies na pochopenie vášho správania pri
                používaní týchto webových stránkach za účelom skvalitnenia
                používateľského zážitku.
              </p>

              <h3>Aké súbory cookies používame</h3>
              <p>
                Existuje niekoľko typov cookies, z ktorých naše webové stránky
                používajú tieto:
              </p>
              <ul>
                <li>
                  <b>Technické / funkčné</b> – LabZone používa tieto cookies,
                  aby sme vás mohli spoznáť na našom webe a ukladajú si vaše
                  predtým vybrané preferencie. Môže ísť o to, aký jazyk ovládate
                  a miesto, kde sa nachádzate. Jedná sa o kombináciu cookies z
                  prvej strany a tiež cookies tretích strán.
                </li>
                <li>
                  <b>Analytické</b> - LabZone tieto súbory cookie používa na
                  zhromažďovanie prevádzkových údajov na našom webe, informácie
                  o vyhľadávaniach na našom webe, a tiež aby sme zistili, ako sa
                  pohybujete po jednotlivých stránkach. Pomôže nám to, aby
                  bolozlepšiť používanie web stránok. S týmito súbormi cookie
                  používame nasledujúcu tretiu stranu:
                  <ul>
                    <li>Google Analytics</li>
                    <li>HubSpot CMS</li>
                    <li>Microsoft Clarity</li>
                  </ul>
                </li>
                <li>
                  <b>Reklamné</b> – LabZone tieto súbory cookie používa na
                  zhromažďovanie informácie o vašej návšteve našich webových
                  stránok, ich obsahu zobrazenia, odkazy, ktoré ste sledovali, a
                  informácie o vašom prehliadači, zariadení a vašej IP adrese.
                  LabZone niekedy zdieľa niektoré obmedzené aspekty týchto
                  údajov s tretími stranami pre reklamné účely. Môžeme tiež
                  zdieľať zhromaždené údaje online prostredníctvom súborov
                  cookie s našimi reklamnými partnermi. To znamená, že keď
                  navštívite inú webovú stránku, môže sa vám zobraziť reklama na
                  základe vašich vzorov prehliadania na našej webovej stránke.
                </li>
              </ul>

              <h3>Ako spravovť súbory cookies</h3>
              <p>
                Svoj prehliadač môžete nastaviť tak, aby neakceptoval súbory
                cookie a tiež vám webová stránka poradí, ako odstrániť cookies z
                vášho prehliadača. V niektorých prípadoch však niektoré z
                funkcií našej webovej stránky nemusia vo výsledku fungovať.
              </p>

              <h3>Zásady ochrany osobných údajov iných webových stránok</h3>
              <p>
                Webové stránky LabZone obsahujú odkazy na iné webové stránky.
                Naše Pravidlá ochrany osobných údajov sa vzťahujú iba na našu
                webovú stránku, takže ak kliknete na odkaz na inú webovú
                stránku, mali by ste si prečítať ich zásady ochrany osobných
                údajov.
              </p>

              <h3>Prenos osobných údajov do tretích krajín</h3>
              <p>
                Vaše osobné údaje neprenášame do tretích krajín mimo EÚ.
                Niektorí partneri, s ktorými spolupracujeme pri spracúvaní
                osobných údajov tieto prenosy uskutočňujú, konkrétne do
                Spojených štátov. Osoby, ktoré údaje vytvárajú v USA, vyhovujú
                dohode na ochranu súkromia medzi EÚ a EÚ a zabezpečujú tak danej
                osobe primeranú úroveň ochrany údajov.
              </p>

              <h3>Právny základ</h3>
              <p>
                V súlade s požiadavkami ochrany osobných údajov a právnych
                predpisov vás musíme informovať o právnych základoch pre
                spracúvanie vašich osobných údajov, ktorými sú:
              </p>
              <ol>
                <li>
                  <b> Plnenie zmluvy </b> - v prípade uzavretia zmluvy o
                  poskytovaní služieb, zmluvy o dielo, zmluvy z dôvernosť a iné.
                </li>
                <li>
                  <b> Plnenie našich právnych povinností </b> - pri vytváraní
                  údajov k dispozícii pre štátne a iné orgány, ktoré dohliadajú
                  na naše činnosti alebo ktoré sa zaoberajú spormi alebo
                  vymáhaním rozhodnutia.
                </li>

                <li>
                  <b> Náš oprávnený záujem </b> - na zlepšovaní a personalizáciu
                  našich služieb, niektorých marketingových aktivít alebo v
                  bezpečnosti a ochrane práv.
                </li>
              </ol>

              <h3>Zmeny v našich zásadách ochrany osobných údajov</h3>
              <p>
                LabZone pravidelne udržiava svoje zásady ochrany osobných údajov
                a aktualizuje ich na tejto webovej stránke. Tieto zásady ochrany
                osobných údajov boli naposledy aktualizované 15. januára 2021.
              </p>

              <h3>Ako nás kontaktovať</h3>
              <p>
                Ak máte akékoľvek otázky týkajúce sa zásad ochrany osobných
                údajov spoločnosti LabZone, údajov, ktoré o vás vedieme, alebo
                by ste chceli využiť niektoré zo svojich práv na ochranu údajov,
                neváhajte nás kontaktovať. Pošlite nám e-mail na adresu
                { GENERAL_EMAIL}
              </p>

              <h3>Ako kontaktovať príslušný orgán</h3>
              <p>
                Ak chcete nahlásiť sťažnosť alebo ak máte pocit, že LabZone
                neuspokojivo neriešil vaše obavy, môžete sa obrátiť na - {""}
                <a
                  href="https://dataprotection.gov.sk/uoou/sk"
                  rel="noreferrer nofollow"
                  target="_blank"
                >
                  Úrad na ochranu osobných údajov Slovenskej republiky
                </a>
                .
              </p>
            </div>
          </div>
        </Section>
      </Layout>
    </>
  )
}
