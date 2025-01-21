
import styles from './homelab.module.css'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function Homelab() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Homelab</h1>

          <Card className={styles.card}>
            <CardHeader>
              <CardTitle>Current Setup and Layout</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`${styles.grid} ${styles.grid2Cols}`}>
                <div>
                  <p className={styles.mb4}>
                    My homelab consists of a Proxmox virtualization cluster, a Raspberry Pi cluster, and a Lenovo ThinkServer NAS.
                    This setup allows me to experiment with various technologies and host my own services.
                  </p>
                  <ul className={styles.list}>
                    <li>Proxmox VE cluster for virtualization</li>
                    <li>Raspberry Pi cluster for edge computing and IoT projects</li>
                    <li>Lenovo ThinkServer as a NAS for centralized storage</li>
                    <li>Custom pfSense router for advanced networking features</li>
                  </ul>
                </div>
                {/* <Image src="/placeholder.svg?height=300&width=400" width={400} height={300} alt="Homelab Setup" className={styles.image} /> */}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Card className={styles.card}>
            <CardHeader>
              <CardTitle>Network Diagram and Explanation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`${styles.grid} ${styles.grid2Cols}`}>
                {/* <Image src="/placeholder.svg?height=300&width=400" width={400} height={300} alt="Network Diagram" className={styles.image} /> */}
                <div>
                  <p className={styles.mb4}>
                    My homelab network is designed for security, flexibility, and ease of management:
                  </p>
                  <ul className={styles.list}>
                    <li>pfSense router for advanced firewall and routing capabilities</li>
                    <li>VLANs for network segmentation (IoT, Lab, Management, etc.)</li>
                    <li>Cloudflare Tunnel for secure remote access without opening ports</li>
                    <li>Nginx Proxy Manager for reverse proxy and SSL termination</li>
                    <li>Pi-hole for network-wide ad blocking and local DNS resolution</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Card className={styles.card}>
            <CardHeader>
              <CardTitle>Project Wiki</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.mb4}>
                My homelab serves as a practical learning environment. Here are some of the projects I&apos;ve worked on:
              </p>
              <ul className={styles.list}>
                <li>Kubernetes cluster for container orchestration</li>
                <li>GitOps workflow with ArgoCD for automated deployments</li>
                <li>Home Assistant smart home setup with custom automations</li>
                <li>TrueNAS Scale for advanced storage management and data protection</li>
                <li>Grafana and Prometheus stack for comprehensive monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <Card className={styles.card}>
            <CardHeader>
              <CardTitle>What I&apos;m Hosting</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={styles.mb4}>
                My homelab hosts various self-hosted services, showcasing my practical DevOps and IT skills:
              </p>
              <div className={`${styles.grid} ${styles.grid3Cols}`}>
                <ul className={styles.list}>
                  <li>Nextcloud (file storage and synchronization)</li>
                  <li>Gitea (self-hosted Git repositories)</li>
                  <li>Home Assistant (home automation)</li>
                  <li>Plex (media server)</li>
                </ul>
                <ul className={styles.list}>
                  <li>Bitwarden (password management)</li>
                  <li>Grafana and Prometheus (monitoring)</li>
                  <li>Pi-hole (network-wide ad blocking)</li>
                  <li>OPNsense (firewall and routing)</li>
                </ul>
                <ul className={styles.list}>
                  <li>Jellyfin (media streaming)</li>
                  <li>Paperless-ngx (document management)</li>
                  <li>Uptime Kuma (uptime monitoring)</li>
                  <li>Vaultwarden (password manager)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

